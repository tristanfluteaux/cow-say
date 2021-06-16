const myInformation = require('./information.js');



let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `${myInformation.name} ${myInformation.campus}`,
    e : "oO",
    T : "U "
}));
