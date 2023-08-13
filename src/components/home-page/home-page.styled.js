import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../button/button";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background-color: ${props => props.theme.background};
    transition: 0.3s ease-in-out;

`

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
        list-style: none;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const LoadButton = styled(Button)`
    background-color: ${props => props.theme.foreground};
    color: ${props => props.theme.primaryText};
    border: none;
    border-radius: 5px;
    max-width: 150px;
    margin: 20px;

    &: hover {
        transform: scale(1.1);
    }

`

export { Section, Ul, StyledLink, LoadButton }