let current_users:string[]=["wakeel","adeel","azeem","naeem","latif"]

let new_users:string[]=["wakeel","adeel","faheem","ali"]

for(let user of new_users){
    if(current_users.includes(user)){
        console.log(`${user} enter a new username`);
     }else{
        console.log(`${user} is available`);
        
     }
}
        
         

