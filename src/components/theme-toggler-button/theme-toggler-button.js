import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../button/button"
import sun from '../../images/sun.png'
import moon from '../../images/moon.png'
import { styled } from "styled-components"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)


    return(
        <>
            <ThemeButton onClick={ () => setTheme( theme === themes.light ? themes.dark : themes.light )} theme={ theme }>
                <Img alt='light/dark theme' src={(theme === themes.light ? sun : moon)}/>
            </ThemeButton>
        </>
    )
}

const ThemeButton = styled(Button)`
    background-color: ${props => props.theme.foreground};
    border: none;
    border-radius: 50%;
    padding: 10px;
    height: 50px;

    &:active {
        rotate: 180deg;
    }
`

const Img = styled.img`

    height: 30px;
`