let name1:string="rao"
let name2:string="wakeel"
let  num1:number=3
let num2:number=4
let array=["adeel",898,false]

console.log("Tests for equality and inequality with strings");
console.log(name1=="wakeel");
console.log(name1!=="wakeel");

console.log('Tests using the lower case function');
console.log(name1.toLowerCase()==name2);
console.log(name1.toLowerCase()!==name2);

console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log(num1==num2);
console.log(num1!==num2);
console.log(num1>num2 && num1<num2);
console.log(num1>num2 || num1==num2);
console.log(num1<num2 || num1==num2);

console.log("Tests using & and  | operators");
console.log(num1<=7 && num2>=9);
console.log(name1!==name2 || num1>num2);

console.log(" Test whether an item is in a array");
console.log(array[2]);

console.log(" Test whether an item is not in a array");
console.log(array[6]);








