import NavBar from "./Components/NavBar";
import Deck from "./Components/Deck";
import BarraInferior from "./Components/BarraInferior"
import styled from "styled-components";

export default function App() {

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


  return (
    <Conteudo>
      <NavBar />
      <Deck objcartao={objcartao}/>
      <BarraInferior objcartao={objcartao}/>
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