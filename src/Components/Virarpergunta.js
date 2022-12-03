import styled from "styled-components"
import Textopergunta from "./Textopergunta"
import Deck from "./Deck"


export default function Virarpergunta({index, texto, useTexto, objcartao, cartaclicada, setCartaclicada}) {

    console.log("Virou para Pergunta")
    console.log (`carta clicada ${cartaclicada}`)
    console.log (`setcarta clicada ${setCartaclicada}`)
    console.log (texto)
    const perg = objcartao.pergunta[index]
    useTexto(perg)
    
    return <Deck />
    
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
`