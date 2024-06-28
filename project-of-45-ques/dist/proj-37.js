"use strict";
let make_shirt = (size = "normal", message = "I love typescript") => {
    console.log(`The size is ${size} with the message is ${message}`);
};
make_shirt();
make_shirt("large", "I like cooding");
make_shirt("medium", "I like cricket");
