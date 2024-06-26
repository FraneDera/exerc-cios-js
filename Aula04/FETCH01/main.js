//------------- FETCH Teste 01 - Estudando as Promises -------------//
//const req = fetch('https://pokeapi.co/api/v2/pokemon/tyranitar');
//console.log(req);

//------------- FETCH Teste 02 - Resolvendo a Promise -------------//
//fetch('https://pokeapi.co/api/v2/pokemon/tyranitar')
//    .then(resp => console.log(resp))
//    .catch( error => console.log(error));

//------------- FETCH Teste 03 - Convertendo a Resposta em JSON -------------//
//fetch('https://pokeapi.co/api/v2/pokemon/tyranitar')
//    .then(resp => resp.json())
//    .then(data => console.log(data))
//    .catch( error => console.log(error));

//------------- FETCH Teste 04 - Acessando informações pelo ID -------------//
//fetch('https://pokeapi.co/api/v2/pokemon/6')
//    .then(resp => resp.json())
//    .then(data => console.log(data))
//    .catch( error => console.log(error));

//------------- FETCH TEste 05 - Utilizando o TRY CATCH -------------//
async function fetchPokemon(){
    try{
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/tyranitar');
            if(!resp.ok){
                throw new Error('Pokemon não encontrado')
            } else {
                const data = await resp.json();
                console.log(data);
            }
   } catch(error){
    console.log(error);
   }
}
//NÂO ESQUEÇA DE EXECUTAR A FUNÇÃO
fetchPokemon();