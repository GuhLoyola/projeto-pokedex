import { useContext, useEffect, useState } from "react"
import { createPokemonList } from "../../services/createList"
import { Header } from "../header/header"
import { PokemonCard } from "../pokemon-card/pokemon-card"
import { ReactComponent as Load } from '../../assets/load.svg'
import { ThemeContext } from "../../contexts/theme-context"
import { LoadButton, Section, StyledLink, Ul } from "./home-page.styled"

const Home = ({ load }) => {

    const { theme } = useContext(ThemeContext)

    const [count, setCount] = useState(10)
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        const fecthList = async () => {
            const list = await createPokemonList(count)
            setPokemonList(list)
        }
        fecthList()
    }, [count])

    return (
        <>
            <Header />
            <Section theme={theme}>
                <Ul>
                    {pokemonList.map((pokemon, index) => (
                        <li key={index}>
                            <StyledLink to={`/pokemon/${pokemon.name}`}>
                                <PokemonCard name={pokemon.name} />
                            </StyledLink>
                        </li>
                    ))}
                </Ul>
                {load ? <Load style={{ fill: theme.background }} /> : ''}
                <LoadButton onClick={ () => setCount(count + 10)} theme={ theme }>Load More</LoadButton> 
            </Section>
            
            
        </>

    )


}

export { Home }