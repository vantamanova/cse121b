// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
    const element = document.querySelector("#output")
    results = data;
    const html = `<h2>${results.name}<h2>
                  <h2>${results.abilities[1].ability.name}<h2>`;
    element.innerHTML = html;
    console.log("first: ", results);

}

const elementList = document.querySelector("#outputList");


function doStuffList(data) {
    console.log(data);

    const pokemonListElement = document.querySelector("#output");
    let pokeList = data.results;

    pokeList = sortPokemon(pokeList);
    pokeList.forEach(pokemon => {
        const html = `<li>${pokemon.name}</li>`;
        pokemonListElement.innerHTML += html;
    });
}

async function getPokemonList(url) {
    const response =  await fetch(url);
    if (response.ok) {
        const data = await response.json();
        doStuffList(data);
    }
}
function compare (a, b) {
    if (a.name < b.name) { 
        return -1;
    }
    else if (a.name > b.name) {
        return 1;
    }
    else {}
    return 0;
}
function sortPokemon(list) {
    let pokemonSorted = list.sort(compare);
    return pokemonSorted;
}

getPokemon(url);
console.log("second: ", results);
getPokemonList(urlList);