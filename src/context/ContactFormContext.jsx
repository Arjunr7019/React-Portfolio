import { useEffect, useState, createContext } from "react";
import { Toaster, toast } from 'sonner';

export const ContactFormContext = createContext(null);

export const ContactFormContextProvider = ({ children }) => {
    const [formData, setFormData] = useState({});
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        // const startTime = performance.now();
        const otherData = `UserAgent: ${navigator.userAgent}
            Platform: ${navigator.platform}
            language: ${navigator.language}`
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
            // const endTime = performance.now();

            // console.log(`Execution time: ${endTime - startTime} ms`);
        // console.log(userInfo)
        setTimeout(()=>{
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
        },[5000])
    }, [])

    const sendForm = async (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            let name = formData.name;
            let email = formData.email;
            let message = formData.message;

            const response = await fetch('https://portfolio-server-ngoy.onrender.com/api/contactForm', {
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
            });

            if (response.status === 200) {
                // The user is authenticated.
                toast.success('Form sent successfully.');
            } else {
                // The user is not authenticated.
                toast.error(response.json())
            }
        } else {
            toast.warning("Provide all Inputs data!")
        }
    }

    return (
        <ContactFormContext.Provider value={{ formData, setFormData, sendForm }}>
            {children}
            <Toaster position="bottom-right" />
        </ContactFormContext.Provider>
    )
}