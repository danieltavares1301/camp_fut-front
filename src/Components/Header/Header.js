import { Link } from "react-router-dom";
import "./header.css"
import logo from "./logo.png"

export default function Header() {
    return (
        <header>
            <Link className="logo" to="/"><img src={logo} className="logo"/></Link>
            <h1 className="adm">Administrador</h1>
            <Link className="MeusCampeonatos" to="/MeusCampeonatos">Meus Campeonatos</Link>
            
            
        </header>
    );
  }
  
  