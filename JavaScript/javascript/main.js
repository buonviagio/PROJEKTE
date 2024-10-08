console.log("Starting javascript...");

/* Exercise 1 */
const myName = "Dima";
console.log("My name is", myName);

/* Exercise 2 */
const myAge = 36;
console.log("I am", myAge, "years old");

/* Exercise 3 */
const juliaAge = 32;
let ageDiff = myAge - juliaAge;
console.log("The age difference between me and Julia is", ageDiff, "years");

/* Exercise 4 */
if (myAge > 21) {
    console.log("You are older than 21")
} else {
    console.log("You are not older than 21");
}

/* Exercise 5 */
if (myAge == juliaAge) {
    console.log("You have the same age as Julia");
} else if (myAge < juliaAge) {
    console.log("Julia is older than you");
} else {
    console.log("Julia is younger than you");
}

/* Exercise 6 */
const nameOfAllThePeopleInClass = ["Dima", "Millie", "Ben", "Raul", "Emily", "Jost", "Killian"];
console.log("The first name in the array:", nameOfAllThePeopleInClass[0]);
console.log("The last name in the array:", nameOfAllThePeopleInClass[nameOfAllThePeopleInClass.length - 1]);
for (let i = 0; i < nameOfAllThePeopleInClass.length; i++) {
    console.log("Position of the name", i, nameOfAllThePeopleInClass[i]);
}

/* Exercise 7 */
const agesOfStudents = [36, 26, 35, 46, 30, 31, 33];

let index = 0;
while (index < agesOfStudents.length) {
    let age = agesOfStudents[index]
    if (age % 2 == 0) {
        console.log(age);
    }
    index++;
}

/* Exercise 8 */
let element = 0;
for (let index = 0; index < agesOfStudents.length; index++) {
    element += agesOfStudents[index];
}

console.log("The sum of all the elements of the ages array", element);

/* Exercise 9 */
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let index = 0; index < arrayOfNumbers.length; index++) {
    let element = arrayOfNumbers[index];
    if (element % 2 == 0) {
        sum += element
    }
}

console.log(sum);

/* Exercise 10 */
const secondArrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 6];
let sum2 = 0;
for (let index = 2; index < secondArrayOfNumbers.length; index += 2) {
    let element = secondArrayOfNumbers[index];
    if (element % 2 == 0) {
        sum2 += element;
    }
}

console.log(sum2);

/* Functions */

/* Exercise 11 */

function summFromExercise11() {
    console.log("The summ of two numbers is", 15 + 35);
}

summFromExercise11();

/* Exercise 12 */

function summFromExercise12() {
    return 25 + 75;
}

console.log(summFromExercise12());

/* Exercise 13 */

function multiplicationFromExercise13(number1, number2) {
    if (typeof number1 != 'number' || typeof number2 != 'number') {
        console.log("You have to pass only numbers");
    } else {
        return number1 * number2;
    }
}

console.log("The result of the function is", multiplicationFromExercise13(2, 5));
console.log("The result of the function is", multiplicationFromExercise13(3, "j"));
console.log("The result of the function is", multiplicationFromExercise13(7, 3));

/* Exercise 14 Write a function that determines 
the type of a triangle given the length of its three sides: Equilateral, Isosceles, or Scalene.*/
const triangle1 = { a: 10, b: 10, c: 10 };
const triangle2 = { a: 30, b: 20, c: 30 };
const triangle3 = { a: 30, b: 20, c: 10 };
const triangle4 = { a: 30, b: "ten", c: 10 };
function functionFromExercise14(triangle) {

    if (typeof triangle.a != "number" || typeof triangle.b != "number" || typeof triangle.c != "number") {
        console.log("Triangle can be defined only with numbers");

    } else if (triangle.a === triangle.b && triangle.a === triangle.c) {
        /* must be all sides equals */
        console.log("Triangle is Equilateral");
    } else if (triangle.a === triangle.b || triangle.a === triangle.c || triangle.b === triangle.c) {
        /* must be two sides equals */
        console.log("Triangle is Isosceles");
    } else {
        console.log("Triangle is Scalene");
    }
}

functionFromExercise14(triangle4);

/*Exercise 15
Write a function to find and print the lowest number in an array to the console. */
let arrayFindMin = [23, 4, 12, 56, -5, 43];
const functionFromExercise15 = (array) => {
    let minimum = array[0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] < minimum) {
            minimum = array[index];
        }
    }
    console.log("The lowest number in an array is", minimum);
}

functionFromExercise15(arrayFindMin);

/**Exercise 16
Write a function to find and print the highest number in an array to the console. */

let arrayFindMax = [23, 4, 12, 56, -5, 43];
const functionFromExercise16 = (array) => {
    let maximum = array[0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] > maximum) {
            maximum = array[index];
        }
    }
    console.log("The highest number in an array is", maximum);
}

functionFromExercise16(arrayFindMax);

/*Exercise 17
Write a function that receives two parameters: an array, and an index. 
The function will print the value of the element at the given index position. 
For example, given the following array and index, the function will print '6':
const array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
const index = 1; */

const arrayFindNumberFromIndex = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
const functionFromExercise17 = (array, index) => {
    console.log(array[index]);
}

functionFromExercise17(arrayFindNumberFromIndex, 7);

/**Exercise 18
Write a simple JavaScript function to join all elements of the following array into a single string:
const myColor = ["Red", "Green", "White", "Black"];
You should see the following in your console: "Red Green White Black" */
const myColor = ["Red", "Green", "White", "Black", "Yellow", "Orange", "Pink"];
const functionFromExercise18 = (array) => {
    let string = array[0] + " ";
    for (let index = 1; index < array.length; index++) {
        string += array[index];
        string += " ";
    }
    console.log(string);
}

functionFromExercise18(myColor);

/**Exercise 19
Write a JavaScript function that reverses a number.
For example, if const x = 32443;, then the output should be 34423. */

const functionFromExercise19 = (number) => {
    console.log("Initial Number = ", number)
    let reverseNumber = "";
    //let counter = 5;
    while (number > 0) {
        reverseNumber += number % 10;
        /** i used math.floor in order to save number after deviden with out rest */
        number = Math.floor(number / 10);
    }
    /** convert from string to number with method parseInt */
    reverseNumber = parseInt(reverseNumber);
    console.log(reverseNumber, "is a number:", typeof reverseNumber == "number");
    console.log("Reverse Number = ", reverseNumber);
}

functionFromExercise19(32443653);

/**Exercise 20
Write a JavaScript function that returns a string in alphabetical order. 
For example, if const x = 'webmaster';, then the output should be 'abeemrstw'. 
Punctuation and numbers aren't passed in the string. */
const x = 'webmaster';
const functionFromExercise20 = (string) => {
    /** split each letter, the result is array of letters */
    let array = string.split("");
    /** sort our array, in function sort we send function, which will sort our array, it compare letters,
     * a positive number if the reference string is lexicographically greater than the compare string 
     * and a negative number if the reference string is lexicographically smaller 
     * than the compare string and zero (0) if the compare and reference strings are equivalent. 
     */
    array.sort((a, b) => a.localeCompare(b));
    console.log(array.join(""));
}
functionFromExercise20(x);

/**Exercise 21
Write a JavaScript function that finds the longest word in a phrase.
 For example, if const x = "Web Development Tutorial";,
 then the output should be "Development".
 */
const y = "Web Development Tutorial is the best part of the Developmentprocess";
const functionFromExercise21 = (string) => {
    let array = string.split(" ");
    let lengthOfTheWord = array[0].length;
    let position = 0;
    for (let index = 1; index < array.length; index++) {
        if (lengthOfTheWord < array[index].length) {
            lengthOfTheWord = array[index].length;
            position = index;
        }

    }
    console.log(array[position]);
}

functionFromExercise21(y);

/**Exercise 22
Write a function that receives as a parameter a string 
and replaces all "a" with "1". e.g.: "JavaScript" will become "J1v1Script". */
const w = "JavaScript";
const functionFromExercise22 = (string, replaceLetter) => {
    let array = string.split("");
    for (let index = 0; index < array.length; index++) {
        if (array[index] == replaceLetter) {
            /* console.log(array[index]); */
            array[index] = 1;
        }
    }
    console.log(array.join(""));
}
functionFromExercise22(w, "a");

/**Exercise 23
Write a JavaScript function that converts the first letter of every word 
in a string to uppercase. For example, if const x = "prince of persia"; 
then the output should be "Prince Of Persia".
 */

const functionFromExercise23 = (string) => {
    let array = string.split(" ");
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result += array[i].replace(array[i].charAt(0), array[i].charAt(0).toUpperCase()) + " ";
    }
    console.log(string);
    console.log(result);
}

functionFromExercise23("prince of persia");

/** Exercise 24
Write a function that by sending a number as parameter, 
tells you all the even numbers before it. 
For example, if you send to the function the number 9, 
it should print 2,4,6,8. */

const functionFromExercise24 = (param) => {
    let result = "";
    for (let index = 1; index <= param; index++) {
        /**If Block to print . at the end */
        if (index % 2 == 0 && (param == index || param - 1 == index)) {
            result += index + ".";
        } else if (index % 2 == 0) {
            result += index + ",";
        }
    }
    console.log(result);
}

functionFromExercise24(9);

/**Exercise 25
Write a function that takes two numbers as parameters, 
then tells you the odd numbers between them. For instance, 
if you send the numbers 1 and 13 as parameters, 
it should print 1,3,5,7,9,11,13. */

const functionFromExercise25 = (start, end) => {
    let result = "";
    for (let index = start; index <= end; index++) {
        if (index % 2 !== 0 && (end == index || end - 1 == index)) {
            result += index + ".";
        } else if (index % 2 !== 0) {
            result += index + ",";
        }
    }
    console.log(result);
}

functionFromExercise25(1, 13);

/**Exercise 26
Write a function that receives an array and only prints the values that repeat. 
For example, given the following array, the function will print 6,23,33,100.
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; */

let functionFromExercise26 = (array) => {
    //let arraySecond = array;
    let result = "";

    let marker = 0;

    for (let i = 0; i < array.length; i++) {
        for (let z = i; z < array.length; z++) {
            if(array[i] == array[z] && (i != z)) {
                result += array[i] + " ";
            }
            
        }
        
    }
    console.log(result);
}
var arr = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100,7];
functionFromExercise26(arr);

/**
 * Exercise 27 
Write a function called myBandList() that will list your favorite bands. 
Start with an empty HTML page that contains a level 1 heading "My Favorite Bands" and an empty unordered list with ID band-list.
Your function should use the JavaScript DOM to create li elements
 and add them to the unordered list, with each li element being a string in an array.
For example, if I call:
myBandList(['Dire Straits', 'Kansas', 'Steely Dan']);
The function will add three list items to the unordered list.
 */

const myBandList = (array) => {
    let linkToUl = document.querySelector("ul");
    for (let index = 0; index < array.length; index++) {
        let liElement = document.createElement("li");
        liElement.textContent = array[index];
        linkToUl.appendChild(liElement);
    }
}

myBandList(['Dire Straits', 'Kansas', 'Steely Dan', 'Scissor Sister', 'Imagine Dragons', 'Backstreet boys', 'N Sync', ]);