/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Vera Antamanova";
let currentYear = 2023;
let profilePicture = "images/personal_photo.jpg"


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");

let image = document.getElementsByTagName('img');
let imageElement = image[0];


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let favFood = ["Pizza", "Steak", "Tuna", "Salad", "Ice Cream"];
foodElement.innerHTML = favFood.join(", ");

let newFood = "Chips";
favFood.push(newFood);

foodElement.innerHTML += `<br>${favFood}`;

favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;

favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;
