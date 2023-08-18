import { styled } from "styled-components";
import { Button } from "../button/button";

const Form = styled.form`
    text-align: center;
    background-color: ${props => props.theme.background};
    transition: 0.3s ease-in-out;
    padding-top: 20px;

    label {
        color: ${props => props.theme.primaryText};
    }

`

const SearchBtn = styled(Button)`
    border: none;
    border-radius: 5px;
    margin-left: 5px;
    box-shadow: ${props => props.theme.boxShadow};
    color: ${props => props.theme.primaryText};
    background-color: ${props => props.theme.foreground};
    padding: 2px 10px;
    font-size: 18px;
    font-weight: 400;

`

const Input = styled.input`
    font-size: 18px;
`

export { Form, SearchBtn, Input }