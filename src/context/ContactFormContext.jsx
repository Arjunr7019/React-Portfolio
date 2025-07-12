import { useEffect, useState, createContext } from "react";
import { Toaster, toast } from 'sonner';

export const ContactFormContext = createContext(null);

export const ContactFormContextProvider = ({ children }) => {
    const [formData, setFormData] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [serverUp, setServerUp] = useState(false);

    const baseUrl = "https://portfolio-server-ngoy.onrender.com/api";

    useEffect(() => {
        const userLogData = localStorage.getItem("userLogData");
        const ipData = JSON.parse(userLogData);
        // console.log("localIp", ipData?.ip)
        let currentUserLogData;
        const checkUser = new Promise((resolve, reject) => {
            fetch("https://get.geojs.io/v1/ip/geo.json").then((response) => response.json())
                .then((data) => {
                    currentUserLogData = data.ip
                    // console.log("ip", data.ip)
                    resolve(true);
                }).catch(err => {
                    console.log(err)
                    reject(false)
                });
        })

        // console.log(`${new Date().getTime()}  :  ${ipData?.expiry}`)

        checkUser.then((message) => {
            if (message && (ipData?.ip !== currentUserLogData || (ipData?.expiry ? new Date().getTime() > ipData?.expiry : true))) {
                // console.log("ips are not same")
                const serverRedy = new Promise((resolve, reject) => {
                    fetch(`${baseUrl}`).then((response) => {
                        if (response.status === 200) {
                            return response.json(); // Parse the JSON only if status is 200
                        } else {
                            throw new Error(`Failed with status: ${response.status}`);
                        }
                    }).then((data) => {
                        // console.log(data);
                        setServerUp(true);
                        resolve(true);
                    }).catch(err => {
                        reject(false);
                        console.log("error:", err);
                    });
                })

                serverRedy.then((message) => {
                    if (message) {
                        const otherData = {
                            "UserAgent": navigator.userAgent,
                            "Platform": navigator.platform,
                            "language": navigator.language
                        }
                        setUserInfo(val => { return { ...val, otherData: otherData } });
                        const requestOptions = {
                            method: "GET",
                            redirect: "follow"
                        };
                        const getGeoLoction = new Promise((resolve, reject) => {
                            fetch("https://get.geojs.io/v1/ip/geo.json", requestOptions)
                                .then((response) => response.json())
                                .then((result) => {
                                    setUserInfo(val => { return { ...val, data: result } });
                                    let item = {
                                        ip: result.ip,
                                        expiry: new Date().getTime() + 10 * 60 * 1000
                                    }
                                    localStorage.setItem("userLogData", JSON.stringify(item))
                                    // console.log(result)
                                    resolve(result)
                                })
                                .catch((error) => {
                                    reject(false)
                                    console.error(error)
                                });
                        })

                        getGeoLoction.then((data) => {
                            fetch(`${baseUrl}/userInfo`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    userInfo: otherData,
                                    data
                                })
                            }).then((response) => response.json())
                                .then((result) => console.log(result))
                                .catch((error) => console.error(error));
                        }).catch((err) => {
                            console.log(err);
                        })
                    }
                }).catch((err) => {
                    console.log(err)
                })
            } else {
                setServerUp(true);
                // console.log("both ips are same api not trigerd")
            }
        }).catch(err=> console.log(err))
    }, [])

    const sendForm = (e) => new Promise((resolve, reject) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            let name = formData.name;
            let email = formData.email;
            let message = formData.message;

            fetch(`${baseUrl}/contactForm`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    userInfo
                })
            }).then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error(response.json());
                }
            }).then((result) => resolve('Form sent successfully.'))
                .catch((error) => reject(error));
        } else {
            toast.warning("Provide all Inputs data!")
        }
    })

    return (
        <ContactFormContext.Provider value={{ serverUp, formData, setFormData, sendForm }}>
            {children}
            <Toaster position="bottom-right" />
        </ContactFormContext.Provider>
    )
}