import { useEffect, useState } from "react"
import { getAbilities } from "../../services/getAbilitiles"

const PokemonAbilities = (props) => {
    const { abilitiesUrl } = props
    const [ ability, setAbility ] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAbilities(abilitiesUrl)
            setAbility(response)
        }
        fetchData()
    }, [abilitiesUrl])

    return(
        <div>
            <h4>{ability.name}</h4>
            <p>{ability.effect_entries?.filter((effect) => effect.language?.name === 'en').map((element, index) => {
                return(
                    <li key={index}>
                        {element.effect}
                    </li>
                )
            })}</p>
        </div>
    )
}

export { PokemonAbilities }