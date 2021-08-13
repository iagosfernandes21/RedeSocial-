import { Navegador } from "../../commom/Navegador/Navegador";
import { Conteudo } from "../ConteudoPaginaPrincipal";

// Os componentes ficaram divididos com: Pagina Principal onde ficou como
// um componente geral, onde chama o cabeçalho navegador e conteudo  

import './PaginaPrincipal.css'
//para inserir a logo, utilizei a tag <img> onde no css ajustei o tamanho ultilizando o width
//e ajustando a sua posição com a margin. 
export function Cabecalho() {
    return (
        <div className="navsup">
            <img src="https://images.vexels.com/media/users/3/140879/isolated/preview/d211ac0a79a44b461b7215905d067a3d-icone-de-borracha-do-myspace.png"
                alt="" width="100%" ></img>
        </div>

    )
}
export function PaginaPrincipal() {
    return (<div className="principal">
        <Cabecalho></Cabecalho>
        <Navegador></Navegador>
        <Conteudo></Conteudo>
    </div>




    )
}