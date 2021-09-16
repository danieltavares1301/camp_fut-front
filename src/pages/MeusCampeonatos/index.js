import './MeusCamp.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from "../../services/api"


export default function MeusCampeonatos(){
    const [camps, setCamps] = useState([])

    useEffect(() => {
        // sujeitoprogramador.com/ + r-api/?api=filmes
        async function loadTimes(){
            const response = await api.get('camps')
            console.log(response.data)
            setCamps(response.data)
        }
        
        loadTimes()
    }, [])
    
    
  
    return(
        <div className="container">
                    
            <div className="box">
            <p>Meus Campeonatos</p>
            <div className="buttons">
                <Link className="registro" to="/registrarCamp">Registrar Campeonatos</Link>
    
            </div>
            <div className="times">
            {camps.map((camp)=>{
                    return(
                        <article className="article" key={camp.id}>
                            <strong><h1>{camp.NomeCampeonato}</h1></strong>
                            <h3>{camp.Modalidade}</h3>
                            <h3>{camp.times}</h3>
                            <Link to="/VerTimes" onClick={()=>{localStorage.setItem('id', camp.id)
                            }}>ver times</Link>
                            <Link to="/RegistrarTime">Registrar Time</Link>
                        </article> 
                    )
                })}
            </div>
            </div>

        </div>
    )
}