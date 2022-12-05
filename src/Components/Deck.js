import Inicio from "./Inicio"
// import Pergunta from "./Pergunta"
// import Resposta from "./Resposta"


export default function Deck({ objcartao }) {

    
    // <Inicio objcartao={objcartao}/>
    // <Pergunta/>
    // <Resposta/>

    return(
        <>Chegou no Deck
        <Inicio objcartao={objcartao}/>
        </>
    )
}


//     < Cartao >
// {
//     objcartao.map((index) =>
//         <p>{texto + (index + 1)}</p>
//     )
// }
//     < img src = { seta } onClick = {()=> Textopergunta({ texto, useTexto, objcartao })}/>
//             </ > 