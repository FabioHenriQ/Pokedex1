const limit = 40;
const offset = 0;
const pokeList = document.querySelector("#pokelist");
const pokeElement = document.querySelector("#element");
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

fetch(url)
    .then(response => response.json())
    .then(listPokemon => listPokemon.results)
    .then(pokemons => pokemons.map(getDetailsPokemons))
    .then(pokemonsDetails => Promise.all(pokemonsDetails))
    .then(pokemons =>  pokeList.innerHTML += pokemons.map(convertToHtml).join(''))
;


function convertToHtml(pokemon) {
    console.log(pokemon)
    return `<li class="card ${pokemon.types[0].type.name}">
                <div class="info-pokemon">
                    <div class="name">
                        <p>${pokemon.name}</p>
                        <p>#${pokemon.id}</p>
                    </div>
                    <ul id="element">
                        ${pokemon.types.map((type) => `<li class="type">${type.type.name}</li>`).join('')}
                    </ul>
                </div>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name} title="${pokemon.name}">
            </li>`
}

async function getDetailsPokemons(pokemon) {
    const listDetails = await fetch(pokemon.url);
    return await listDetails.json();
}