import { useState } from "react"
import { useEffect } from "react"

export function App(){
    const [message, setmessage] =useState("Loading...")

    //initialization, mounting, updation, unmounting

    useEffect( ()=> {
        const result = fetch("https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human")
        
        result
        .then((res) => res.json())
        .then((hello) => setmessage(hello.data.data[0].content))
        .catch(() => setmessage("Failed to load"))

    },[])
    
    
   
    return(
        <div>
            <h1>Welcome to chai code</h1>
            <p>Serving Hot chai with react</p>
            <h2>{message}</h2>
        </div>
    )
}