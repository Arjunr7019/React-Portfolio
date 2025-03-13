import React,{ createContext, useEffect, useState } from "react";

export const GlobalResourceContext = createContext(null);

export const GlobalResourceContextProvider = ({children})=>{
    const[serverUp,setServerUp] = useState(false);

    useEffect(()=>{
        fetch('https://portfolio-server-ngoy.onrender.com/api').then((response) => {
            if (response.status === 200) {
              return response.json(); // Parse the JSON only if status is 200
            } else {
              throw new Error(`Failed with status: ${response.status}`);
            }
          }).then((data)=>{
            console.log(data);
            setServerUp(true);
          }).catch(err => {
            console.log("error:", err);
          })
    },[])
    return(
        <GlobalResourceContext.Provider value={{serverUp}}>
            {children}
        </GlobalResourceContext.Provider>
    )
}