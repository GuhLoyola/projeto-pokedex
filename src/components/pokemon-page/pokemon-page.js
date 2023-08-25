import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { useParams } from "react-router-dom"
import { getPokemonData } from "../../services/getPokemonData"
import { Header } from "../header/header"
import { Footer } from "../footer/footer"
import { PokemonAbilities } from "../pokemon-abilities/pokemon-abilities"
import { AbilityList, Details, Div, General, Hr, Info, MoveList, P, Secao } from "./pokemon-page.styled"
import { Li, Types } from "../pokemon-card/pokemon-card.styled"


const PokemonPage = ({ props }) => {

    const { theme } = useContext(ThemeContext)
    const [pokemon, setPokemon] = useState({})
    const { name } = useParams() || props

    useEffect(() => {
        const fetchData = async () => {
            const card = await getPokemonData(name)
            setPokemon(card)
        }
        fetchData()
    }, [name])

    return (
        <>
            <Header />
            <Details theme={theme}>
                <Div theme={theme}>
                    {pokemon ?
                        <>
                            <General>
                                <Info theme={theme}>
                                    <h2>{pokemon.name}</h2>
                                    <p>id #{pokemon.id}</p>
                                    <div>
                                        <Types>
                                            {pokemon.types?.map((element, index) => {
                                                return (
                                                    <Li key={index} theme={theme}>
                                                        {element.type?.name}
                                                    </Li>
                                                )
                                            })}
                                        </Types>
                                    </div>
                                </Info>
                                <img alt={pokemon.name} src={pokemon.sprites?.other["official-artwork"].front_default} />

                            </General>
                            <Hr theme={theme} />
                            <Secao theme={theme}>
                                <h3>Abilities</h3>
                                <AbilityList>
                                    {pokemon.abilities?.slice(0, 5).map((element, index) => {
                                        return (
                                            <Li key={index} theme={theme}>
                                                <PokemonAbilities abilitiesUrl={element.ability?.url} />
                                            </Li>
                                        )
                                    })}
                                </AbilityList>
                            </Secao>
                            <Hr theme={theme} />
                            <Secao theme={theme}>
                                <h3>Moves</h3>
                                <MoveList>
                                    {pokemon.moves?.slice(0).map((element, index) => {
                                        return (
                                            <Li key={index} theme={theme}>
                                                {element.move?.name}
                                            </Li>
                                        )
                                    })}
                                </MoveList>
                            </Secao>
                        </>
                        :
                        <P theme={ theme }>Sorry...Pokemon not found 😥</P>
                    }
                </Div>
            </Details>
            <Footer/>
            
        </>
    )
}

export { PokemonPage }