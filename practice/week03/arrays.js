// Activity 1 - Map
let arr = ['one', 'two', 'three'];
let newArray = arr.map(value => `<li>${value}</li>`);

console.log(newArray);

const elementMyList = document.getElementById("myList")
console.log(elementMyList);

elementMyList.innerHTML = newArray.join();
console.log(elementMyList);

//Activity 2 - Map
let arr2 = ['A', 'B', 'A'];
console.log(arr2);

let newArray2 = arr2.map(function(grade) {
    if (grade == "A") {
        return 4;
        }
    else {
        return 3;
        }
    })
console.log(newArray2);

// Activity 3 - Reduce
let gpaPoints = newArray2.reduce((a, b) => a + b / newArray2.length);
console.log(gpaPoints);

// Activity 4 - Filter
let arr4 = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
let newArray4 = arr4.filter((item) => item.length <= 6);
console.log(newArray4); 

// Activity 5 - indexOf
let arr5 = [12, 34, 21, 54];
let luckNumber = 21;
console.log(arr5.indexOf(luckNumber));