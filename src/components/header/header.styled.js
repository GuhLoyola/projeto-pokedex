import { styled } from "styled-components";

const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 55px;
    background-color: ${props => props.theme.foreground};
    transition: 0.3s ease-in-out;

    @media(max-width: 480px) {
        padding: 20px 30px;
    }
`

const Logo = styled.img`

    height: 50px;
`

export { HeaderStyle, Logo }