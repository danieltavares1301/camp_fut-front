import { useState, useEffect } from "react";
import "../Home/Home.css"
import api from "../../services/api";
import escudo from "../Home/escudo.png"



export default function Home() {
    const [times, setTimes] = useState([])
    
    useEffect(() => {
        async function loadTimes(){
            const response = await api.get('confr')
            console.log(response.data)
            setTimes(response.data)

        }
        loadTimes()
    }, [])




    return(
        <body className="body">
        <div className="container">
            <div className="box">
                <h1>Proximos jogos</h1>
                {times.map((time)=>{
                    return(
                        <article key={time.id}>
                            <img className="escudo" src={escudo}/><strong className="strong"> {time.Time1}{time.PtTime1} x {time.PtTime2} {time.Time2}</strong><img className="escudo" src={escudo}/><hr/>
                        </article> 
                    )
                })}
            </div>
        </div>
    </body>
    )
}