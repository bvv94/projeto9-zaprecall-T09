import { useState } from "react"
import styled from "styled-components"

export default function Resposta({visible, imagem, useIcone, icone, index, texto, useTexto, objcartao, useImagem}) {

    console.log("Texto Resposta imprimir")
    useIcone(2)

    return (
        <> chegou na pergunta
            {objcartao.map((ob, index) =>
                <Cartao key={index} >
                    <p>{ob.resposta}</p>
                    <img src={imagem} alt= "setavirar"/>
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
`