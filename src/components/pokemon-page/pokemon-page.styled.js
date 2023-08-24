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
    padding: 20px 0;

    img {
        height: 250px;
    }

    @media( max-width: 480px) {
        flex-direction: column;

        img {
            height: 200px;
        }
    }

`

const Div = styled.div`
    background-color: ${props => props.theme.foreground};
    padding: 20px;
    border-radius: 15px;

`
const Info = styled.div`
    text-align: center;
    text-transform: Capitalize;
    color: ${props => props.theme.primaryText};
    transition: 0.3s ease-in-out;
`

const AbilityList = styled.ul`
    padding: 10px 20px;
    text-transform: Capitalize;

    li {
        padding: 5px 10px;
        margin: 10px;
    }

`

const Secao = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 20px 0;

    h3 {
        margin: 10px 0;
        color: ${props => props.theme.primaryText};
        transition: 0.3s ease-in-out;
    }
`

const MoveList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 20px;

    @media(max-width: 480px) {
        padding: 10px;

        li {
            font-size: 10px;
            flex-basis: 30%;
            flex-grow: 1;
        }
    }

`

const Hr = styled.hr`
    border: 1px solid ${props => props.theme.primaryText};
    transition: 0.3s ease-in-out;

`

const P = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    color: ${props => props.theme.primaryText};
    transition: 0.3s ease-in-out;

`

export {  P, General, Div, Info, Details, Secao,AbilityList, MoveList, Hr }