import styled from "styled-components"
// import Deck from "./Deck";
import setavirar from "../assets/seta_virar.png"
import Resposta from "./Resposta"


export default function Pergunta({useIcone, imagem, icone, index, texto, useTexto, objcartao, useImagem}) {

    console.log("Textoperguntaimprimir")

    useImagem (setavirar)     

    // return (
    //     <> chegou na pergunta
            {objcartao.map((ob, index) =>
                <Cartao key={index} >
                    <p>{ob.pergunta}</p>
                    {/* <p>{o.resposta}</p> */}
                    <img src={imagem} alt= "setavirar" onClick={() => Resposta({icone, index, texto, useTexto, objcartao, useImagem })} />
                </Cartao>)}
    //     </>
    // )
     
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