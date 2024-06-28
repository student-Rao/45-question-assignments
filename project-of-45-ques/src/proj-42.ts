// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians
//   by adding the phrase the Great to each magician’s name. Call show_magicians() 
//   to see that the list has actually been modified
let magicians_name=["Ali","azher","larif"]
function make_greats(){
    for(let name of magicians_name){
     console.log(` ${name} The Great`);
    }
}
make_great();


console.log(magicians_name);

