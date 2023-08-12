async function getPokemonData(name) {
    const nameLowerCase = name.toLowerCase()
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameLowerCase}/`)
    const pokemon = await response.json()
    return await pokemon
}

export { getPokemonData }