import { useEffect, useState, createContext } from "react";
import { Toaster, toast } from 'sonner';

export const ContactFormContext = createContext(null);

export const ContactFormContextProvider = ({ children }) => {
    const [formData, setFormData] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [serverUp, setServerUp] = useState(false);

    useEffect(() => {
        fetch('https://portfolio-server-ngoy.onrender.com/api').then((response) => {
            if (response.status === 200) {
                return response.json(); // Parse the JSON only if status is 200
            } else {
                throw new Error(`Failed with status: ${response.status}`);
            }
        }).then((data) => {
            // console.log(data);
            setServerUp(true);
        }).catch(err => {
            console.log("error:", err);
        });

        const otherData = {"UserAgent": navigator.userAgent,
            "Platform": navigator.platform,
            "language": navigator.language}
        setUserInfo(val => { return { ...val, otherData: otherData } });
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        fetch("https://get.geojs.io/v1/ip/geo.json", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setUserInfo(val => { return { ...val, data: result } });
                // console.log(result);
            })
            .catch((error) => console.error(error));
    }, [])

    useEffect(() => {
        // const startTime = performance.now();
        // const endTime = performance.now();

        // console.log(`Execution time: ${endTime - startTime} ms`);
        console.log("useEffect",userInfo)

        if (serverUp && userInfo.data) {
            fetch("https://portfolio-server-ngoy.onrender.com/api/userInfo", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userInfo
                })
            }).then((response) => response.json())
                .then((result) => console.log(result))
                .catch((error) => console.error(error));
        }
    }, [serverUp,userInfo])

    const sendForm = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            let name = formData.name;
            let email = formData.email;
            let message = formData.message;

            fetch('https://portfolio-server-ngoy.onrender.com/api/contactForm', {
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
            }).then((result) => toast.success('Form sent successfully.'))
                .catch((error) => toast.error(error));
        } else {
            toast.warning("Provide all Inputs data!")
        }
    }

    return (
        <ContactFormContext.Provider value={{ serverUp, formData, setFormData, sendForm }}>
            {children}
            <Toaster position="bottom-right" />
        </ContactFormContext.Provider>
    )
}