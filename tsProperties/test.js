"use strict";
let v1 = undefined;
let v2 = null;
v1 = 123; // 컴파일 에러
let v3 = undefined;
v3 = 123;
console.log(typeof undefined); // undefined
console.log(typeof null); // object
