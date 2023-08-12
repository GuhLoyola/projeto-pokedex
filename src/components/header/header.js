import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button"
import logo from'../../images/pokedex.png'

const Header = () => {

    const { theme } = useContext(ThemeContext)

    return(
        <Header theme={ theme }>
            <img alt="Logo pokedéx" src={ logo }/>
            <ThemeTogglerButton />
        </Header>
    )
}

export { Header }