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

//******************* difference between Let, Const and Var.
/* the Let keyword
the Let keyword was introduced in Es6 (2015)

**Rules**
1. Let cannit be redeclared
2. Let must be declared before use 
3. Let has block scope
*/

// 1. Let cannot be redeclared

let subject = "mathematics";
//Let subject = "english"

// var can be redeclared
var fruit = "orange";
var fruit = "apple";

console.log(fruit);

// Let must be declared before use
// console.log(myVariable);
// let myVariable = 10;

let myNumber = 10;

console.log(myNumber);

/* Hoisting -> you can use the variable before itvis declared 
------- let and const are not hoisted-----------
*/

sayHiToMe = " Hi Donald";
var sayHiToMe;
console.log(sayHiToMe);

//Or

sayHiToMe = console.log("Hi Donald");
var sayHiToMe;

//Let has a block scope
{
  let job = 5;
  console.log(job);
}
//console.log(job);

//------- var does not have block scope -------------------
{
  var animal = "lion";
}
console.log(animal);

//---------- var redeclaring a variable inside a block will also redclare the variable outside the block---------------------
var macBook = 10;

{
  var macBook = 200;
}
console.log(macBook);

//-------- Let redclaring a variable inside a block will not redclare the variable outside the block----------

let windows = 5;

{
  let windows = 6000;
}
console.log(windows);

/* the const keyword
the const keyword was introduced in ES6 (2015)
**Rules**
1. const cannot be reassigned
2. const cannot be redeclared
3. const has block scope
*/

// const cannot be reassigned
const costFromTempSiteTokodex = 200;
//costFromTempSiteTokodex = 100;
//console.log(costFromTempSiteTokodex);

//const cannot be rdclared
// const yes = true;
// const yes = no;

//*******************************8 Basic operators ******************************************* */

// Math Operators (Substraction)
const now = 2023;
const kingsleyAge = now - 1988;
const chekwubeAge = now - 1990;

console.log(kingsleyAge, chekwubeAge);
// Math Operators (multiplication, Division and raise to power)
console.log(kingsleyAge * 2, kingsleyAge / 5, chekwubeAge ** 3);

/**
 * create 2 variables
 * the datatype must be strinds
 * add the two variables
 * add display the result in the console
 */

var air = "300";
var gas = "100";

console.log(air + " " + gas);

// ------------------------- Assignment Operator (=) ------------------------
let numberOne = 10 + 5;
numberOne += 5; //numberOne = numberOne + 5;
console.log(numberOne);

let numberTwo = 2 + 5;
numberTwo *= 7;
console.log(numberTwo);

let numberThree = 1;
numberThree++; // numberThree = numberThree + 1;
console.log(numberThree);

let numberFour = 4;
numberFour--; // numberFour = numberFour - 1;
console.log(numberFour);

// -------------------------------- Comparison Operators include(>,<,>=,<=,==,===)--------------------------------
let obinnaAge, charlesAge;
obinnaAge = "35";
charlesAge = "29";
console.log(obinnaAge == charlesAge);

// ---------------------------------- Operator Precedence ------------------------------------------
const yearNow = 2023;
const guysAge = yearNow - 1982;
const chidubemAge = yearNow - 1990;
console.log((guysAge + chidubemAge) * 10);

/*------------------------*/

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
if (markBMI > johnBMI) {
  console.log(`mark's BMI ${markBMI} is higher than john's ${johnBMI} `);
} else {
  console.log(`john's BMI ${johnBMI}  is higher than mark's ${markBMI} `);
}

//******************************strings and template literals****************************** */

const myName = "Donald";
const myJob = "backend developer";
const yearOfBirth = 1999;
const currentYear = 2023;
const newCharles =
  "I'm " +
  myName +
  ", a" +
  (currentYear - yearOfBirth) +
  " year old" +
  myJob +
  " !";
console.log(newCharles);

const donaldNewer = `I'm ${myName}, a ${
  currentYear - yearOfBirth
} year old ${myJob}`;
console.log(donaldNewer);

//************************************** taking decision: If else Statement */
const johnAge = 35;
if (johnAge >= 18) {
  console.log(
    `john is eligible to drink alchohol 🍺, because his age is ${johnAge}`
  );
} else {
  const yearLeft = 18 - johnAge;
  console.log(
    ` john is not eligible to drink alchohol 😢, wait another ${yearLeft} years`
  );
}

let dayOfTheWeek = "monday";

if (dayOfTheWeek === "monday") {
  console.log("sit at home");
} else {
  console.log("write some code");
}
