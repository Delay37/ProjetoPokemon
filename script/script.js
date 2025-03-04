async function BuscarPokemon() {

    let url = "https://pokeapi.co/api/v2/pokemon/";
    numPokemonjs = document.getElementById("numPokemon").value;

    url = url + numPokemonjs;
    let response = await fetch(url);  

    if (response.status === 404) {
        alert('Pokemon não encontrado');
    } else {
        let respostaApi = await response.json();
    

    console.log(respostaApi);
    document.getElementById("pokeImagem").src = respostaApi.sprites.front_default;
    document.getElementById("pokeImagem").style.display = "block"
    
    document.getElementById("pokeNome").innerHTML = ("#"+numPokemonjs +" "+ respostaApi.species.name)

    const container = document.getElementById("tiposPokemon")
    const divs = container.querySelectorAll(".pokemon-type")
    
    const traducoes = {
        normal: "Normal",
        fighting: "Luta",
        flying: "Voador",
        poison: "Venenoso",
        ground: "Terrestre",
        rock: "Pedra",
        bug: "Inseto",
        ghost: "Fantasma",
        steel: "Aço",
        fire: "Fogo",
        water: "Água",
        grass: "Grama",
        electric: "Elétrico",
        psychic: "Psíquico",
        ice: "Gelo",
        dragon: "Dragão",
        dark: "Sombrio",
        fairy: "Fada",
      }
      divs.forEach(div => div.classList.add('displayNone'))
      divs.forEach(div => {
        div.classList.forEach(className => {
          if (className !== "displayNone" && className !== "pokemon-type") {
            div.classList.remove(className);
          }
          div.innerHTML = ''
        });
      });
      
  
      for (let i = 0; i < respostaApi.types.length; i++) {

        divs[i].classList.add(respostaApi.types[i].type.name)
        
        divs[i].classList.remove("displayNone")
        
        const tipoOriginal = respostaApi.types[i].type.name
        const tipoTraduzido = traducoes[tipoOriginal]
        
        divs[i].innerHTML = tipoTraduzido || tipoOriginal
    }
}}
