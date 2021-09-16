import { useState, useEffect } from "react";
import "./Home.css"
import api from "../../services/api"
import escudo from "./escudo.png"
import { Link } from "react-router-dom";


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
            <div className="boxJogos">
                <h1>Proximos jogos</h1>
                {times.map((time)=>{
                    return(
                        <article key={time.id} className="jogos">
                            <img className="escudo" src={escudo}/><strong> <Link to="/Resultado" onClick={()=>{localStorage.setItem("id", time.id)}}> {time.Time1}{time.PtTime1} x {time.PtTime2} {time.Time2}</Link></strong><img className="escudo" src={escudo}/>
                        </article> 
                    )
                })}
            </div>
        </div>
    </body>
    )
}