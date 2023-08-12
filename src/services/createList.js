async function createPokemonList(count) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`)
    const List = await response.json()
    return await List.results
}

export { createPokemonList }