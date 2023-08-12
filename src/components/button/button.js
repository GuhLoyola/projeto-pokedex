import { styled } from "styled-components"

export const Button = (props) => {

    return(
        <Btn {...props} />
    )
}

const Btn = styled.button`
    padding: 10px 20px;
    border-radius: 15px;
    font-weight: bold;
    transition: 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
    }

`