//*********** value and variables **********/

console.log("Hello world");

let firstName = "guy";
console.log(firstName);

//************variables naming conventions */
let obinna4 = "obinna";
let _charles = "charles";
let $chidubem = "chidubem";
console.log(obinna4, _charles, $chidubem);

//********** data types nin javascript

/*
javascript has 8 datatypes
1 string
2 number
3 booleans
4 bigint
5 undefined
6 null
7 symbol
8 object
*/

// booleans-> true or false value
var javaScriptIsEasy = true;
var lifeIsHard = false;

console.log(typeof lifeIsHard);
// numbers
let chekwube = 30;
let $kingsley = 29.8;

console.log(typeof chekwube);
console.log(typeof $kingsley);

//strings
let message = " welcome to france";
console.log(typeof message);
let guy = "34";
console.log(typeof guy);

//coersion and conversion

let donald = "24" + 2;
console.log(donald, typeof donald);

//undefined
let year;
console.log(year, typeof year);

// an empty value has nothing to do with 'undefined'
let car = "";
console.log(typeof car);

// when adding a number and string, javascript will treat the number as a string
let vehicle = 16 + 4 + "volvo";
console.log(vehicle, typeof vehicle);

/* null
in javascript null is nothing. it is supposed to be something that doesn't exist.
the data type of null of object */

let money = null;
console.log(money, typeof money);

/**
 * difference between undefined and null
 * typeofbundefined isbundefined
 * typeof null is object
 */
// similarities
console.log(null == undefined);

console.log("Hi");
