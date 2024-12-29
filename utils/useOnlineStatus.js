import { useEffect } from "react";
import { useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setUseOnlineStatus] = useState(true);
    
    //check if the browser is online or offline
    useEffect(()=>{

        window.addEventListener('offline',()=>{
            console.log("You are offline");
            setUseOnlineStatus(false);
        })

        window.addEventListener('online',()=>{
            console.log("You are online");
            setUseOnlineStatus(true);
        })


    },[])

    return onlineStatus;
}


export default useOnlineStatus;