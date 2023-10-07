/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile =
{
    name: "Vera Antamanova",
    photo: "images/personal_photo.jpg",
    favoriteFoods: ["Pizza", "Steak", "Tuna", "Salad", "Ice Cream"],
    hobbies: ["Reading", "Basketball", "Photography", "Cosplaying"],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Moscow, Russia",
        length: "29 years"
    }
)

myProfile.placesLived.push(
    {
        place: "Saint Petersburg, Russia",
        length: "5 years"
    }
)

myProfile.placesLived.push(
    {
        place: "Yerevan, Armenia",
        length: "1 year"
    }
)

myProfile.placesLived.push(
    {
        place: "Dubai, UAE",
        length: "4 months"
    }
)

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
let photo = document.querySelector("#photo");
console.log(photo);
photo.setAttribute("src", myProfile.photo);
photo.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(element => {
    let newLi = document.createElement("li");
    newLi.textContent = element;
    document.querySelector("#favorite-foods").appendChild(newLi);
    
});

/* Hobbies List */
myProfile.hobbies.forEach(element => {
    let newLi = document.createElement("li");
    newLi.textContent = element;
    document.querySelector("#hobbies").appendChild(newLi);
})


/* Places Lived DataList */
myProfile.placesLived.forEach(element => {
    let newDt = document.createElement("dt");
    newDt.textContent = element.place;
    let newDd = document.createElement("dd");
    newDd.textContent = element.length;
    document.querySelector("#places-lived").appendChild(newDt);
    document.querySelector("#places-lived").appendChild(newDd);
})

