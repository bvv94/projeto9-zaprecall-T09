import { useState } from "react"
import styled from "styled-components"
import Virarpergunta from "./Virarpergunta"
import Textopergunta from "./Textopergunta";
import setaplay from "../assets/seta_play.png"


export default function Deck({ objcartao }) {

    const [texto, useTexto] = useState(`Pergunta `);
    const [imagem, useImagem] = useState (setaplay);
    const [icone, useIcone] = useState (true);
    

    return (
        <>
            {objcartao.map((o, index) =>
                <Cartao key={index} texto={texto}>
                    <p>{texto}</p>
                    {/* <p>{o.pergunta}</p> */}
                    {/* <p>{o.resposta}</p> */}
                    <img src={imagem} alt= "play" onClick={() => Textopergunta({ icone, index, texto, useTexto, objcartao, useImagem })} />
                </Cartao>)}
        </>
    )

}

const Cartao = styled.div`
    font-family: 'recursive';
    font-size: 16px;
    font-weight: 700;
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ion-icon {
        width: 20px;
        height: 23px;
    }
    img {
        width: 15px;
        height: 18px;
    }
`

//     < Cartao >
// {
//     objcartao.map((index) =>
//         <p>{texto + (index + 1)}</p>
//     )
// }
//     < img src = { seta } onClick = {()=> Textopergunta({ texto, useTexto, objcartao })}/>
//             </ > 