import { useContext, useEffect, useState } from "react"
import { createPokemonList } from "../../services/createList"
import { Header } from "../header/header"
import { PokemonCard } from "../pokemon-card/pokemon-card"
import { ThemeContext } from "../../contexts/theme-context"
import { LoadButton, Section, StyledLink, Ul } from "./home-page.styled"
import { Search } from "../search-form/search-form"
import { Footer } from "../footer/footer"

const Home = () => {

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
            <Search/>
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
                <LoadButton onClick={ () => setCount(count + 10)} theme={ theme }>Load More</LoadButton> 
            </Section>
            <Footer/>            
        </>

    )


}

export { Home }