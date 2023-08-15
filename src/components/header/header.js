import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button"
import { HeaderStyle, Logo } from "./header.styled"
import logo from'../../images/pokedex.png'
import { Link } from "react-router-dom"

const Header = () => {

    const { theme } = useContext(ThemeContext)

    return(
        <HeaderStyle theme={ theme }>
            <Link to={'/'}>
                <Logo alt="Logo pokedéx" src={ logo }/>
            </Link>
            <ThemeTogglerButton />
        </HeaderStyle>
    )
}

export { Header }