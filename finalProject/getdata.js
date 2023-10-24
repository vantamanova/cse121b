import displayHeroes from "./display.js";

// Using the API to get the data
export let heroesList = [];

const url = 'https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/characters';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a10b697522mshd283db9d9d7dc49p16fb09jsnb719a8ef2807',
		'X-RapidAPI-Host': 'marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com'
	}
};

async function getData() {
	const response = await fetch(url, options);

    if (response.ok) {
        heroesList = await response.json();
        
        displayHeroes(heroesList);
        console.log(heroesList);
        return heroesList;
      }
}

export default getData;
