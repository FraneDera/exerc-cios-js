//Realizando o FETCH no ENDPOINT
//const pegaPokemon = async (id)=>{
//    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//    const res = await fetch(url)
//    const data = await res.json()
//    console.log(data.name);
//}

//Percorrendo os 100 primeiros pokemons
const fecthPokemon = async()=>{
    for(let i = 1; i <= 100; i ++){
        await pegaPokemon(i)
    }
}

//Exibindo os 100 primeiros pokemons
const pegaPokemon = async (id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    //console.log(data.name);
    console.log(data.types[0].type.name);
}

fecthPokemon();