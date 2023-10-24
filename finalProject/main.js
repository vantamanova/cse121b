import getData, {heroesList} from "./getdata.js";
import displayHeroes from "./display.js";

// Create gridly elements using template literals and DOM
const infoElement = document.querySelector("#info");
let name = `Marvel Super Heroes`;

let textH3 = `Find the information about you favorite ${name}`;

let h3 = document.createElement("h3"); 
h3.textContent = textH3;
infoElement.appendChild(h3);



// Creats superheroesElement. Made it possible to use it in the other parts of the programm
const superheroesElement = document.querySelector("#superheroes");
export default superheroesElement;



// Reset Function. Used to clear the superheroesElement (screen)
const reset = () => {
    superheroesElement.innerHTML = "";
};

// sortBy Function 
const sortBy = (superheroes) => {
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter){
        case "option1":
            displayHeroes(superheroes.filter(hero => hero.powers.includes("Flight")));
            break;
        case "option2":
            displayHeroes(superheroes.filter(hero => hero.powers.includes("Time manipulation")));
            displayHeroes(superheroes.filter(hero => hero.powers.includes("Reality manipulation")));
            displayHeroes(superheroes.filter(hero => hero.powers.includes("Magic manipulation")));
            break;
        case "option3":
            const superheroesSorted = superheroes.slice();
            superheroesSorted.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                else {
                    return 0;
                }
            })
            displayHeroes(superheroesSorted);
            break;
        case "all":
            displayHeroes(heroesList);
            break;
    };
};

document.querySelector("#sortBy").addEventListener("change", () => {sortBy(heroesList)} );

getData();


