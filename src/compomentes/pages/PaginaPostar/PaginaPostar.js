import { Navegador } from "../../commom/Navegador/Navegador"
import { Cabecalho } from "../PaginaPrincipal/PaginaPrincipal"
import './PaginaPostar.css'
import history from '../../../history';


    export function PaginaPostar(){
       
    //    criei a função "postar" para direcionar o botão postar para a pagina inicial
    //    logo apos passei o onclick na função do botão para que assim fosse possivel direciona-lo
    //    ultilizando o history que permite manipular as rotas    
        function Postar(){
            function click(){
                console.log("clicou");
                history.push("/")
            }
           
            return(
                <div className="postar">
                <input type="text" name="text" size="40" ></input>
              
              
                <div className="botao"onClick = {click}>
                <input type="button" value="Enviar" id="botaoo"/>
                </div>
            </div>
        )
        }
    
        return(
        <header className="post">
      
            <Cabecalho></Cabecalho>
            <Navegador></Navegador>  
            <Postar></Postar>
        </header>
    )
    }