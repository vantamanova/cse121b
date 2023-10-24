import superheroesElement from "./main.js";

let displayHeroes; 

export default displayHeroes = (data) => {
    data.forEach((item) => {

        let article = document.createElement("article");

        // Creates the property for the name
        let name = document.createElement("h3"); 
        name.textContent = item.name;

        // Creates the property for the paragraph
        let description = document.createElement("p");
        description.textContent = item.description;

        let getImage = `image/${item.id}.jpg`
        let newImg = document.createElement("img");
        newImg.setAttribute("src", getImage);
        newImg.setAttribute("alt", item.name);

        // Appends children elements to #superheroes
        article.appendChild(name);
        article.appendChild(description);
        article.appendChild(newImg);

        superheroesElement.appendChild(article);
    });
};
