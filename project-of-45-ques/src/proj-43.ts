// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
//  with a copy of the array of magicians’ names. Because the original array will be unchanged, 
//  return the new array and store it in a separate array. Call show_magicians() with each array to
//   show that you have one array of the original names and one array with the Great added to each
//    magician’s name.

let magiciansName=["Ali","azher","larif"]

function make_great(){
  for (let names of magiciansName){
    console.log(`${names}`); 
  }
}
let copy_magiciansName=magiciansName.slice()
function show_magician(){
    for(let copy of magiciansName){
        console.log(`${copy} The Great`);
        
    }
}
make_great();
show_magician()


