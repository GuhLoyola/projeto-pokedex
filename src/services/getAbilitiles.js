async function getAbilities(url) {
    const response = await fetch(url)
    const abilities = await response.json()
    return abilities
}

export { getAbilities }