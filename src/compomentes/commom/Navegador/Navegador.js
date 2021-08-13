import {NavLink } from 'react-router-dom';
import './Navegador.css'

//Os botões do navegador foram ajustados do mesmo modo que a logo posicionando no cabeçalho
//ultilizando o  padding, para ajustar a a altura e o margin-left para ajustar a posição 
export function Navegador() {
    return (<nav className="navegador">

        <NavLink exact className="link-navegador"  
        to="/">
            Linha Do Tempo
        </NavLink>
        <NavLink className="link-navegador"  
        to="/post">
            Postar
        </NavLink>
        <NavLink className="usuario"
            to="perfil">
            Iago Fernandes    
        </NavLink>
   
   
    </nav>


    )
}


