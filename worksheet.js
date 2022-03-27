"use strict";


let dayOfTheWeek = 'Monday';
console.log(dayOfTheWeek);
dayOfTheWeek = 'Friday';
console.log(`I can't wait for ${dayOfTheWeek}`);

let animalInput = prompt('What is your favorite animal?');
let colorInput = prompt('What is your favorite color?');
console.log(`I've never seen a ${colorInput} ${animalInput}!`);

// Biscuits and gravy, Cheeseburger, Prime Rib//

do {
    var timeOfDay = parseInt(prompt('Enter a time.'));
} while (isNaN(timeOfDay))
let meal = '';
if (timeOfDay < 1200) {
    meal = 'Biscuits and gravy';
} else if (timeOfDay > 1200 && timeOfDay < 1700) {
    meal = 'Cheeseburger';
} else if (timeOfDay > 1700) {
    meal = 'Prime Rib';
} 
    
console.log(meal);

 
let randomNumber = Math.floor((Math.random()*10)+1);
if (randomNumber >= 0 && randomNumber <=2) {
    console.log('Beatles');
} else if (randomNumber >= 3 && randomNumber <= 5) {
    console.log('Stones');
} else if (randomNumber >= 6 && randomNumber <= 8) {
    console.log('Floyd');
} else if (randomNumber >= 9 && randomNumber <= 10) {
    console.log('Hendrix');
}


for(let i =0; i<7;i++) {
    console.log('JavaScript is cool!');
}

let num = 0
for(let i=[0];i<11;i++) {
    console.log(num);
    num++
}

for(let i =0; i<5;i++) {
    console.log('hello');
    console.log('goodbye');
}

function printMovieName (favMovie){
    let result;
    result = favMovie;
    return result;
}
    
let myFavMovie = printMovieName('Ironman');
console.log(myFavMovie)
   
function bandName() {
    let result;
    result = prompt('Who is your favorite band?');
    return result;
}

let favBand = bandName();
console.log(favBand);


function concertDisplay(musicalAct) {
    let myStreet;
    myStreet = prompt('Enter the street you live on.');
    return myStreet;
}
let musicalAct = 'Billy Joel'
let coolConcert=concertDisplay(musicalAct)
console.log(`It would be great if ${musicalAct} played a show on ${coolConcert}`);


let deskTopItems = ['desk', 'lamp', 'computer', 'monitor'];
console.log(deskTopItems[1]);

deskTopItems.push('Infinity Gauntlet');

for(let i =[0]; i<deskTopItems;i++) {
    console.log(deskTopItems);
}


let magicNumber = 50;
let guess = 0;
do {
    guess =parseInt(prompt('Try to guess the magic number!'));
    if (guess < 40) {
        alert('Too low!');
    } else if (guess > 60) {
        alert('Too high!'); 
    } else if (guess >= 40 && guess <=49) {
        alert('Getting warmer!');
    } else if (guess >=51 && guess <=60) {
        alert('Getting warmer!');    
    } else if (guess === magicNumber) {
        alert(`Congratulations! ${guess} is the magic number!`);
    }
} while (guess !== magicNumber);    

// 👇⬇️Random number version👇⬇️
// let magicNumber = Math.floor((Math.random()*100)+1);
// console.log(magicNumber);
// let guess = 0;

// do {
//     guess =parseInt(prompt('Try to guess the magic number!'));
//     if (guess < magicNumber) {
//         alert('Too low!');
//     } else if (guess > magicNumber) {
//         alert('Too high!');    
//     } else if (guess === magicNumber) {
//         alert(`Congratulations! ${guess} is the magic number!`);
//     }

// } while (guess !== magicNumber); 