"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
function show_magicians() {
    let magicians_name = ["Ali", "azher", "larif"];
    for (let name of magicians_name) {
        console.log(`${name}`);
    }
}
show_magicians();
