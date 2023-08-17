import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { useParams } from "react-router-dom"
import { getPokemonData } from "../../services/getPokemonData"
import { Header } from "../header/header"
import { ReactComponent as Load } from '../../assets/load.svg'
import { PokemonAbilities } from "../pokemon-abilities/pokemon-abilities"
import { Details, Div, General, Info } from "./pokemon-page.styled"
import { Li, Types } from "../pokemon-card/pokemon-card.styled"

const PokemonPage = ({ load, props }) => {

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
                <Div theme={ theme }>
                    {load ? <Load /> :
                        pokemon ?
                            <>
                                <General>
                                    <Info>
                                        <h2>{pokemon.name}</h2>
                                        <p>id #{pokemon.id}</p>
                                        <div>
                                            <Types>
                                                {pokemon.types?.map((element, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {element.type?.name}
                                                        </li>
                                                    )
                                                })}
                                            </Types>
                                        </div>
                                    </Info>
                                    <img alt={pokemon.name} src={pokemon.sprites?.other["official-artwork"].front_default} />

                                </General>

                                <div>
                                    <h3>Abilities</h3>
                                    <ul>
                                        {pokemon.abilities?.slice(0, 5).map((element, index) => {
                                            return (
                                                <li key={index}>
                                                    <PokemonAbilities abilitiesUrl={element.ability?.url} />
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div>
                                    <h3>Moves</h3>
                                    <ul>
                                        {pokemon.moves?.slice(0).map((element, index) => {
                                            return (
                                                <li key={index}>
                                                    {element.move?.name}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </>
                            :
                            <p>Sorry...Pokemon not found 😥</p>
                    }
                </Div>
            </Details>
        </>
    )
}

export { PokemonPage }