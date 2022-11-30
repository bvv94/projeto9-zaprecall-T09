import styled from "styled-components"


export default function Cartoes() {
    let i = 1;

    const cartoes = [
        { pergunta: "O que é JSX?", resposta: "Uma extensão da linguagem JavaScript" },
        { pergunta: "O React é __", resposta: "Uma biblioteca JavaScript para construção de interfaces" },
        { pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula" },
        { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
        { pergunta: "O ReactDOM nos ajuda __", resposta: "Interagindo com a DOM para colocar componentes React na mesma" },
        { pergunta: "Usamos o npm para __", resposta: "Gerenciar os pacotes necessários e suas dependências" },
        { pergunta: "Usamos props para __", resposta: "Passar diferentes informações para componentes" },
        { pergunta: "Usamos estado (state) para __", resposta: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

    return (
        <>
            {cartoes.map((c, index) => <Cartao>Pergunta {index+1}<ion-icon name="play-outline">icone</ion-icon></Cartao>)}
        </>
    )
}

const Cartao = styled.div`
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