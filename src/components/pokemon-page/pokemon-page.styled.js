import { styled } from "styled-components";

const Details = styled.section`
    padding: 30px;
    background-color: ${ props => props.theme.background };
    transition: 0.3s ease-in-out;
`

const General = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-evenly;

    img {
        height: 250px;
    }

`

const Div = styled.div`
    background-color: ${props => props.theme.foreground};
    padding: 20px;
    border-radius: 15px;

`
const Info = styled.div`
    text-transform: Capitalize;
`

export {  General, Div, Info, Details }