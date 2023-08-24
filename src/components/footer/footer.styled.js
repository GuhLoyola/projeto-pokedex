import { styled } from "styled-components";

const FooterBar = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: ${props => props.theme.foreground};

    a {
        margin: 0 20px;
        transition: 0.3s ease-in-out;
    }

    a:hover {
        transform: scale(1.2);
    }
`

const Icons = styled.img`
    width: 30px;
    filter: invert(1);
`

export { FooterBar, Icons }