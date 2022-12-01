import { useState } from "react";
import styled from "styled-components"


export default function Deck() {
    let i = 0;

    const objcartao = [
        { pergunta: "O que é JSX?", resposta: "Uma extensão da linguagem JavaScript" },
        { pergunta: "O React é __", resposta: "Uma biblioteca JavaScript para construção de interfaces" },
        { pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula" },
        { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
        { pergunta: "O ReactDOM nos ajuda __", resposta: "Interagindo com a DOM para colocar componentes React na mesma" },
        { pergunta: "Usamos o npm para __", resposta: "Gerenciar os pacotes necessários e suas dependências" },
        { pergunta: "Usamos props para __", resposta: "Passar diferentes informações para componentes" },
        { pergunta: "Usamos estado (state) para __", resposta: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

    const [carta, useCarta] = useState(`Pergunta${i}`);

    return (
        <>
            {objcartao.map((o, index) => <Cartao key={index}>
                <p>{`Pergunta ${index+1}`}</p>
                {/* <p>{o.pergunta}</p> */}
                {/* <p>{o.resposta}</p> */}
                <ion-icon name="play-outline">icone</ion-icon>
            </Cartao>)}
        </>
    )
    // {
    //     objcartao.map((index) =>
    //         // onClick={()=>virar()}
    //         <Resposta key={index}>
    //             {carta}
    //             <ion-icon name="play-outline">icone</ion-icon>
    //         </Resposta>)
    // }
    function Virar() {


        console.log("virou")

        // const perg = objcartao.pergunta[key]
        // console.log(ladopergunta)
        // useCarta(perg);

        // { ladopergunta ? ImprimirPergunta(objcartao, carta) : ImprimirCosta(objcartao, carta) }
    }

    function ImprimirCosta({ objcartao, carta }) {
        console.log("imprimiu Costa")

        return (
            <>
                {objcartao.map((index) =>
                    <Cartao onClick={(() => Virar())} key={index}>
                        {carta}
                        <ion-icon name="play-outline">icone</ion-icon>
                    </Cartao>
                )}
            </>
        )
    }
    function ImprimirPergunta(objcartao, carta) {
        console.log("imprimiu pergunta")

        const x = objcartao.pergunta
        useCarta(...objcartao, x);
        console.log(x)
        return (
            <>
                {objcartao.map((index) =>
                    <Cartao onClick={(() => Virar())} key={index}>
                        {carta}
                        <ion-icon name="play-outline">icone</ion-icon>
                    </Cartao>
                )}
            </>
        )
    }
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

const Resposta = styled.div`
`