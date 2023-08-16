import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { useParams } from "react-router-dom"
import { getPokemonData } from "../../services/getPokemonData"
import { Header } from "../header/header"
import { ReactComponent as Load } from '../../assets/load.svg'
import { PokemonAbilities } from "../pokemon-abilities/pokemon-abilities"

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
            <section>
                <div>
                    {load ? <Load /> :
                        pokemon ?
                            <>
                                <h2>{pokemon.name}</h2>
                                <p>id #{pokemon.id}</p>
                                <img alt={pokemon.name} src={pokemon.sprites?.other["official-artwork"].front_default} />
                                <div>
                                    <h3>Types</h3>
                                    <ul>
                                        {pokemon.types?.map((element, index) => {
                                            return (
                                                <li key={index}>
                                                    {element.type?.name}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
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
                                        {pokemon.moves?.slice().map((element, index) => {
                                            return (
                                                <li key={index}>
                                                    {element.move?.move}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </>
                            :
                            <p>Sorry...Pokemon not found 😥</p>
                    }
                </div>
            </section>
        </>

    )
}

export { PokemonPage }