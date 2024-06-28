"use strict";
const PlaceToVisit = ["near thatta", "khasmir", "karachi", 'dubai', 'saudi arabia'];
console.log();
let placesToVisit = ["Kyoto, Japan", "Machu Picchu, Peru", "Reykjavik, Iceland", "Cape Town, South Africa", "Santorini, Greece"];
// Print the array in its original order
console.log("Original order of places to visit:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the actual list
let sortedPlacesToVisit = [...placesToVisit].sort();
console.log("Places to visit in alphabetical order:");
console.log(sortedPlacesToVisit);
