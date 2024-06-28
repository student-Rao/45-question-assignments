let arr3:string[]=['adeel','azeem','faheem']
console.log('hey! I am found big dinner table');
arr3.unshift("Rao")
// const middlein=Math.floor(arr3.length/2)
// arr3.splice(middlein,0,"Latif")
arr3.splice(2,0,"latif")
arr3.push("Naeem")
for(let i=0;i<arr3.length;i++){
    console.log(`dear ${arr3[i]}!You are invited to dinner at my home `);
}
console.log("I can invite only two people for dinner");

console.log(arr3.pop(), " ! Sorry I cannot invite them to dinner");
console.log(arr3.pop(), " ! Sorry I cannot invite them to dinner");
console.log(arr3.pop(), " ! Sorry I cannot invite them to dinner");
console.log(arr3.pop(), " ! Sorry I cannot invite them to dinner");
arr3.pop()
arr3.pop()
console.log(arr3);
