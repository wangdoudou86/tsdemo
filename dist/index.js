"use strict";
var Genger;
(function (Genger) {
    Genger["Male"] = "man";
    Genger["Female"] = "woman";
})(Genger || (Genger = {}));
function merry(a, b) {
    if (a.gender !== b.gender) {
        return [a, b];
    }
    else {
        throw new Error('性别相同不能结婚');
    }
}
var a = { gender: Genger.Male };
var b = { gender: Genger.Female };
console.log(merry(a, b));
