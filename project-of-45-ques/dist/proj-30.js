"use strict";
let UserName = ["admin", "rao adeel", 'faheem', "rao wakeel"];
for (let username of UserName) {
    if (username == 'admin') {
        console.log(`Hello admin ,would you like to see status report`);
    }
    else {
        console.log(`Hello ${username}, thank you for logging`);
    }
}
