import { Link } from "react-router-dom";
import "./header.css"
import logo from "./logo.png"

export default function HeaderUser() {
    return (
        <header>
            <Link className="logo" to="/"><img src={logo} className="logo"/></Link>
            <Link className="MeusCampeonatos" to="/MeusCampeonatos">Meus Campeonatos</Link>
            
            
        </header>
    );
  }
  
  