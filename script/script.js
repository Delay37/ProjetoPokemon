async function BuscarPokemon() {
    // buscar value de numPokemon
    let url = "https://pokeapi.co/api/v2/pokemon/";
    numPokemonjs = document.getElementById("numPokemon").value;

    // buscar na API o Pokémon correspondente
    url = url + numPokemonjs;
    let response = await fetch(url); // Aguarda a resposta da API
    let respostaApi = await response.json(); // Converte para JSON corretamente

    // adicionar imagem na div pokeImagem
    console.log(respostaApi);
    document.getElementById("pokeImagem").src = respostaApi.sprites.front_default;
    // adicionar nome em pokeNome 
    document.getElementById("pokeNome").innerHTML = ("#"+numPokemonjs +" "+ respostaApi.species.name)
    // mudar a classe de div de tipo do pokemon 
    
    // remover a classe displayNone
}
