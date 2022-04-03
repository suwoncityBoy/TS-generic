"use strict";
// console.log(Symbol('fdo') === Symbol('foo'));
const sym = Symbol();
const obj = {
    [sym]: 'value'
};
console.log(obj[sym]);
