import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { getPokemonData } from "../../services/getPokemonData"
import { Card, Info, Li, Types } from "./pokemon-card.styled"

const PokemonCard = (props) => {

    const { theme } = useContext(ThemeContext)
    const { name } = props
    const [ pokemon, setPokemon ] = useState({})

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await getPokemonData(name)
            setPokemon(response)
        }
        fetchPokemon(1)
    }, [name])


    return(
        <Card theme={ theme }>
            <Info theme={ theme }>
                <h1>{pokemon.name}</h1>
                <h2>id #{pokemon.id}</h2>
            </Info>
            <img alt={pokemon.name} src={pokemon.sprites?.other["official-artwork"].front_default}/>
            <Types>
                {pokemon.types?.map((element, index) => {
                    return(
                        <Li key={index} theme={ theme }>
                            {element.type?.name}
                        </Li>
                    )
                })}
            </Types>
        </Card>
    )
}

export { PokemonCard }