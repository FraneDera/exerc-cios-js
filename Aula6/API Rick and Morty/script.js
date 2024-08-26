let contador = 1;

const inc = ()=>{
    contador +=1;
    //console.log(contador);
    fetchPersonagem(contador);
}

const dec = ()=>{
    if(contador > 1){
    contador -=1;
    //console.log(contador);
    fetchPersonagem(contador);
    }
}

const fetchPersonagem = async (contador)=>{
    let url = "https://rickandmortyapi.com/api/character/" + contador;
    const api = await fetch(url);
    const data = await api.json();
    //console.log(data);
    imageRES = document.getElementById("imagem");
    imageRES.src = data.image;
    nomeRes = document.getElementById("nome");
    nomeRes.innerText = data.name;
    descricaoRes = document.getElementById("descricao");
    descricaoRes.innerText = data.status + " " + data.species + " " + data.type + " " + data.gender + " Planeta de Origem: " + data.origin.name;
}

fetchPersonagem(contador);