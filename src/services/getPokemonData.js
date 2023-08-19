async function getPokemonData(id) {
    const fetchedId = id.toLowerCase()
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${fetchedId}/`)
    const pokemon = await response.json()
    return await pokemon
}

export { getPokemonData }