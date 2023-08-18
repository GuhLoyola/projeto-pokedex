import { styled } from "styled-components";

const Card = styled.div`
    background-color: ${props => props.theme.foreground};
    color: ${props => props.theme.primaryText};
    border-radius: 10px;
    box-shadow: ${props => props.theme.boxShadow};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px;

    img {
        height: 120px;
    }

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

`

const Info = styled.div`
    text-align: center;
    color: ${ props => props.theme.primaryText};
    transition: 0.3s ease-in-out;
    text-transform: Capitalize;

    h1 {
        font-size: 20px;
    }

    h2 {
        font-size: 17px;
    }
`

const Types = styled.ul`
    display: flex;
    justify-content: space-evenly;
`

const Li = styled.li`
    margin: 7px;
    padding: 2px 10px;
    list-style: none;
    border-radius: 5px;
    background-color: ${props => props.theme.secundaryText};
    color: ${props => props.theme.primaryText};
    transition: 0.3s ease-in-out;

`

export { Card, Info, Types, Li }