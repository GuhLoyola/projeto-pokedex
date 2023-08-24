import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import gitHub from '../../images/github.svg'
import linkedin from '../../images/linkedin-in.svg'
import { FooterBar, Icons } from "./footer.styled"

const Footer = () => {

    const { theme } = useContext(ThemeContext)

    return(
        <FooterBar theme={ theme }>
            <a href="https://github.com/GuhLoyola" target="_blank" rel="noreferrer"><Icons src={ gitHub } theme={ theme }/></a>
            <a  href="https://www.linkedin.com/in/gustavo-loyola-754102241/" target="_blank" rel="noreferrer" ><Icons src={ linkedin }/></a>
        </FooterBar>
    )

}

export { Footer }