"use strict";
let age = 2 | 13 | 20 | 65;
console.log(" If the person is less than 2 years old, print a message that the person is a baby.");
age = 2;
if (age == 2) {
    console.log("that the person is baby");
}
console.log(" If the person is at least 2 years old but less than 4, print a message that the person is a toddler.");
if (age == 2 && age < 4) {
    console.log("that the person is tolder");
}
console.log(" If the person is at least 4 years old but less than 13, print a message that the person is a kid.");
age = 4;
if (age == 4 && age < 13) {
    console.log("that the person is kid");
}
console.log("If the person is at least 13 years old but less than 20, print a message that the person is a teenager.");
age = 13;
if (age == 13 && age < 20) {
    console.log("that the person is a teenager");
}
console.log(" If the person is at least 20 years old but less than 65, print a message that the person is an adult.");
age = 20;
if (age == 20 && age < 65) {
    console.log("that the person is a adult");
}
console.log(" If the person is age 65 or older, print a message that the person is an elder.");
age = 65;
if (age == 65) {
    console.log("that the person is a elder");
}
