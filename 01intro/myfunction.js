"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
    //return 'hello'
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myvalue = addTwo(5);
getUpper("4");
signUpUser("Fede", "fede@fede.website", false);
loginUser("h", "h@h.cm");
// function getValue(myVal: number) {
//     if (myVal > 5) {
//         true
//     }
//     return "200 ok"
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
//const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
