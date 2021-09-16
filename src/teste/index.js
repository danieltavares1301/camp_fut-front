import { useEffect, useState } from "react";


export default function Teste(){
    const [camp, setCamp] = useState({
        nome: '',
        idade: 0
    })

    useEffect(()=>{
        setCamp({nome: "daniel", idade: 10})
        console.log(camp)
    }, [])
    return(
        <div>
            <h1>fafd</h1>
        </div>
    )
    

}
