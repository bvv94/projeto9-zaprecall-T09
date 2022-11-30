import styled from "styled-components"
import img from "../assets/logo.png"


export default function NavBar() {
    return (
        <Logo>
            <img scr={img} alt="logo"/>
        </Logo>
    )
}

const Logo = styled.div`
    background-color: blue;
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;

    img {
        width: 52px;
    }
`