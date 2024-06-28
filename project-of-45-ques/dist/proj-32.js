"use strict";
let current_users = ["wakeel", "adeel", "azeem", "naeem", "latif"];
let new_users = ["wakeel", "adeel", "faheem", "ali"];
for (let user of new_users) {
    if (current_users.includes(user)) {
        console.log(`${user} enter a new username`);
    }
    else {
        console.log(`${user} is available`);
    }
}
