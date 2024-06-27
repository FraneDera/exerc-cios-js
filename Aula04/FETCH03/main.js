//Buscando elementos do objeto da requisição FETCH

//Criando a função assincrona
async function fetchPokemon(){
    try {
        const pokemonID = document.getElementById('pokemonId').value;
        const pokemonNome = document.getElementById('pokemonNome');
        const pokemonType = document.getElementById('pokemonType');

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);

//Verificar e se dar erro joga pro CATCH
            if(!resp.ok){
                throw new Error('Pokemon Não Encontrado!!');
            } else {
                const data  = await resp.json();
                console.log(data);
                const imgElemento = document.getElementById('pokemonSprite');
                const pokemonSprite = data.sprites.front_default;
                const pokemonNomeData = data.name;
                const pokemonTipoData = data.types[0].type.name;

                imgElemento.src = pokemonSprite;
                imgElemento.style.display = 'block';
                pokemonNome.innerHTML = pokemonNomeData;
                pokemonType.innerHTML = pokemonTipoData;
            }

    } catch (error) {
        console.error(error);
    }
}