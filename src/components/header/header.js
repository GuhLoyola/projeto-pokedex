import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button"
import { HeaderStyle, Logo } from "./header.styled"
import logo from'../../images/pokedex.png'

const Header = () => {

    const { theme } = useContext(ThemeContext)

    return(
        <HeaderStyle theme={ theme }>
            <Logo alt="Logo pokedéx" src={ logo }/>
            <ThemeTogglerButton />
        </HeaderStyle>
    )
}

export { Header }