

// Using the API to get the data

/* Declare and initialize global variables */
const superheroesElement = document.querySelector("#superheroes");
let heroesList = [];

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
        
        displayHeroes(heroesList)
        console.log(heroesList);
        
      }
}

const displayHeroes = (data) => {
    data.forEach((item) => {

        let article = document.createElement("article");

        // Creates the property for name
        let name = document.createElement("h3"); 
        name.textContent = item.name;

        // Creates the property for the paragraph
        let description = document.createElement("p");
        description.textContent = item.description;

        let getImage = `image/${item.id}.jpg`
        let newImg = document.createElement("img");
        newImg.setAttribute("src", getImage);
        newImg.setAttribute("alt", item.name);

        // Appends children elements to #superhiroes
        article.appendChild(name);
        article.appendChild(description);
        article.appendChild(newImg);

        superheroesElement.appendChild(article);
    });
};


/* reset Function */
const  reset = () => {
    superheroesElement.innerHTML = "";
};


/* sortBy Function */
const sortBy = (superheroes) => {
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter){
        case "option1":
            displayHeroes(superheroes.filter(hero => hero.powers.includes("Flight")));
            break;
        case "option2":
            //displayHeroes(superheroes.filter(hero => !hero.name.includes("a")));
            
            console.log("Boooooo");
            break;
        case "option3":
            displayHeroes(heroesList);
            console.log("Boooooo");
            break;
        case "all":
            displayHeroes(heroesList);
            break;
    };
};

getData();
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(heroesList)} );

