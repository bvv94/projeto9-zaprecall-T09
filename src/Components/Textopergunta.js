import styled from "styled-components"
import Deck from "./Deck";
import setavirar from "../assets/seta_virar.png"


export default function Textopergunta({icone, index, texto, useTexto, objcartao, useImagem}) {

    console.log("Textoperguntaimprimir")

    const perg = objcartao[index].pergunta
    useTexto(perg)
    console.log(perg)
    useImagem (setavirar)     
     
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