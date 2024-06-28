let arr2:string[]=['adeel','azeem','faheem']
arr2.push("wakeel")
let mynames='RAO'
let not_present='faheem'
let new_guest='wakeel'
// let arr3=arr2.push('Wakeel')
for(let j=0; j<arr2.length;j++){
    console.log(`dear ${arr2[j]}!\n I want you at my house for dinner tonight with all your family\n with Regards\n ${mynames}`);
    
}
console.log(`${not_present} is not present`);

console.log('hey! I am found big dinner table');
arr2.unshift("Rao")
const middleindex=Math.floor(arr2.length/2)
arr2.splice(middleindex,0,"Latif")
arr2.push("Naeem")
for(let i=0;i<arr2.length;i++){
    console.log(`dear ${arr2[i]}!You are invited to dinner at my home `);
}

