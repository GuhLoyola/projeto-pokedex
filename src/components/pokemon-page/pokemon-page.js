import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { useParams } from "react-router-dom"
import { getPokemonData } from "../../services/getPokemonData"
import { Header } from "../header/header"
import { ReactComponent as Load } from '../../assets/load.svg'

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
                    {/* {load? <Load/> : 
                        pokemon?
                            <>
                                <h2>{pokemon.name}</h2>
                                <img src={pokemon.sprites?.other["official-artwork"].front_default}/>
                            </>
                } */}
                </div>
            </section>
        </>

    )
}

export { PokemonPage }