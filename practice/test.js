const url = 'https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/characters';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a10b697522mshd283db9d9d7dc49p16fb09jsnb719a8ef2807',
		'X-RapidAPI-Host': 'marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com'
	}
};


async function getResult() {
	const response = await fetch(url, options);

    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        console.log(data);
      }
}

async function getPokemonList(url) {
    const response = await fetch(url, options);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
    }
}

getPokemonList(url);
getResult();

