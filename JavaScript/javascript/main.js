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