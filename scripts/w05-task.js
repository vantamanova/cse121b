/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];



/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        // Create an HTML <article> element (createElement).
        let article = document.createElement("article");

        // Create an HTML <h3> element and add the temple's
        // templeName property to this new element.
        let newH3 = document.createElement("h3");
        newH3.textContent = temple.templeName;

        // Create an HTML <img> element and
        // add the temple's imageUrl property to the src attribute
        // and the temple's location property to the alt attribute

        let newImg = document.createElement("img");
        newImg.setAttribute("src", temple.imageUrl);
        newImg.setAttribute("alt", temple.location);

        // Append the <h3> element and the <img> element
        // to the <article> element as children. (appendChild)
        article.appendChild(newH3);
        article.appendChild(newImg);

        templesElement.appendChild(article);
        
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    console.log(templeList);
    displayTemples(templeList);
};

/* reset Function */
const  reset = () => {
    templesElement.innerHTML = "";
}; 


/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter){
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            date = new Date(1950, 0, 1);
            console.log(date);
            displayTemples(temples.filter(temple => (new Date (temple.dedicated) < date)));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)} );



getTemples();
console.log(templeList);
console.log(templeList);

/* Event Listener */
