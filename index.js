const info = require('./informations');

const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `${info.myName}, ${info.campus}`,
    e : "oO",
    T : "U "
}));