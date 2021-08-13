
function Card({ nome, texto, likes }) {
    return (
        <div className="card">
            <h3 className={"titulo-card"}>{nome}</h3>
            <span className={"texto-card"}>{texto}</span>
            <span className={"likes-card"}>{likes}</span>
            
            <div className="botao">
            <input type="button" value="Curtir" id="btnSubmit"/>
            </div>
            <div className="caixa">
            <input type="texto" class="textbox" size="40" ></input>
            </div>
            <div className="botaoo">
                <input type="button" value="Adicionar comentario" id="botoon"/>
                </div>
                
        </div>
    )
}


export function Conteudo() {


    let infoPost = [
        {
            id: 1,
            nome: "Joao",
            texto: "Olá, como você está?",
            likes: "1 Curtida",
            botao: "curtir"
        },
        {
            id: 2,
            nome: "Maria",
            texto: "Nossa, foi muito bom!",
            likes: "2 Curtidas",
            botao: "curtir"
        },
        {
            id: 3,
            nome: "Pedro",
            texto: "Oi,quanto tempo!",
            likes: "6 Curtidas",
            botao: "curtir"
        }
    ];
    //foi feito uma lista com os posts ultilizando o map, 
    //no qual o mesmo recebe os arrays e retona com a função de cada chamada
    //a mesma foi centralizada no css ultilizando o padding e o margin
    let cards = infoPost.map((infoPost) =>
    (<Card
        nome={infoPost.nome}
        texto={infoPost.texto}
        likes={infoPost.likes}
        botao={infoPost.botao}>
    </Card>
    )
    )
    //Atraves do elemento criado, como por exemplo a função card criada acima, é possivel mostrar os conteudos
    //na tela principal, pois seus atributo são chamados na classe denominada "pai" através do props, onde o 
    //o mesmo recebe cards como parametro.
    return (
        <div className="conteudo-galeria">
            {cards}

        </div>

    )

}

