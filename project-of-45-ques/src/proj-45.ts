// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name. 
//  It should then accept an arbitrary number of keyword arguments.
//   Call the function with the required information and two other name-value pairs,
//    such as a color or an optional feature. Print the Object that’s 
//   returned to make sure all the information was stored correctly.

function carInfo(manufacturer:string,ModelName:string,addtionalInfo:{[key:string]:string|boolean}){
     return {
        manufacturer,
        ModelName,
       ...addtionalInfo
     }
}

console.log(carInfo("Islamabad","2000",{car:"start",hassUnroof:true}));
console.log(carInfo("Islamabad","2000",{car:"start",hassUnroof:true}));