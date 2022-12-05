import NavBar from "./Components/NavBar";
import Deck from "./Components/Deck";
import {useState} from "react";
import BarraInferior from "./Components/BarraInferior"

import styled from "styled-components";

export default function App() {

  const objcartao = [
    { inicial: "pergunta 1", pergunta: "O que é JSX?", resposta: "Uma extensão da linguagem JavaScript" },
    { inicial: "pergunta 2", pergunta: "O React é __", resposta: "Uma biblioteca JavaScript para construção de interfaces" },
    { inicial: "pergunta 3", pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula" },
    { inicial: "pergunta 4", pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
    { inicial: "pergunta 5", pergunta: "O ReactDOM nos ajuda __", resposta: "Interagindo com a DOM para colocar componentes React na mesma" },
    { inicial: "pergunta 6", pergunta: "Usamos o npm para __", resposta: "Gerenciar os pacotes necessários e suas dependências" },
    { inicial: "pergunta 7", pergunta: "Usamos props para __", resposta: "Passar diferentes informações para componentes" },
    { inicial: "pergunta 8", pergunta: "Usamos estado (state) para __", resposta: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]
  const [cont, userCont] = useState(0)

  return (
    <Conteudo>
      <NavBar />
      <Deck objcartao={objcartao} userCont={userCont}/>
      <BarraInferior cont={cont} objcartao={objcartao}/>
    </Conteudo>

  );
}

const Conteudo = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`