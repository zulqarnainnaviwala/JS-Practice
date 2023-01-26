// *************JavaScript Output*****************
//     Writing into an HTML element, using innerHTML.
document.getElementById("demo").innerHTML = 5 + 6;
//     Writing into the HTML output using document.write().
document.write(5 + 6);
//     Writing into an alert box, using window.alert().
window.alert(5 + 6);
alert(5 + 6);
//     Writing into the browser console, using console.log().
console.log(5 + 6);



// *************JavaScript Statement *****************
//composed of Values, Operators, Expressions, Keywords, and Comments.

let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c

// *************JavaScript Values *****************
 
// Fixed values are called Literals.
// Variable values are called Variables.

// A JavaScript variable must begin with:
//     A letter (A-Z or a-z)  or A dollar sign ($) or an underscore (_)
var $name  , _name , name, firstName ;
//     Reserved words cannot be used as names.
// var function ;

// *************JavaScript Comments *****************
// Single Line Comment
/*
   Multi-Line Comment
   Multi-Line Comment
   Multi-Line Comment
   Multi-Line Comment
*/

// *************JavaScript Variables *****************

// Variables are containers for storing values
// It's a good programming practice to declare all variables at the beginning of a script.
var name = 'ZULQARNAIN';
var name = "ZULQARNAIN";

// Always declare JavaScript variables with var,let, orconst.
var name; 
// let name; 
// const name = 'z';

//      The var keyword is used in all JavaScript code from 1995 to 2015.
//      The let and const keywords were added to JavaScript in 2015.
// JavaScript identifiers are case-sensitive.

// Variables defined with let cannot be Redeclared &  have Block Scope.
// Variables defined with const cannot be Redeclared, Reassigned &  have Block Scope.

// Use const when you declare:
//     A new Array, Object, Function, RegExp
//But you can :
//     Change the elements of constant array
const arr = [1,2,3,4]
arr.push(5);
arr.push(6,7,8,9,10);
arr.pop();
arr.length
//   and Change the properties of constant object
const obj = {name:'z', };
obj.age=12;

// Exponential Notation
var y = 123e5;    // 12300000
var z = 123e-5;   // 0.00123

// Note "Javascript are always one type:double (64-bit floating point)."




// *************JavaScript Operators *****************

// Arithmetic Operators     +  -  *  /  %  --  ++  **(ES2016) 
// Assignment Operators     =  +=  -=  *=  /=  %=  **=
// Comparison Operators     ==   ===   !=  !==  >  <  >=   <=  ?
// Logical Operators        && || !
// Conditional Operators    
// Type Operators           typeof   instanceof(Returns true if an object is an instance of an object type)

// Shift Assignment Operators       <<=     >>=     >>>=
// Bitwise Assignment Operators     &=      ^=      |=
// Logical Assignment Operators(ES2020)     &&=     ||=     ??=
//      &&= --> x &&= y --> x = x && (x = y)
//      ||= --> x ||= y --> x = x || (x = y)
//      ??= --> x ??= y --> x = x ?? (x = y)

// Type Coercion in JS
var n = 5 + 5; //10
var n = "5" + 5; //55
var n = "5" - 5; //0
var n = "5" + "5"; //55
var n = "5" - "5"; //0
var n = "Hello" + 5; //Hello5
var n = "Hello" - 5; //NaN
var n = "Hello" + "5"; //Hello5
var n = true + '10'; //true10
var n = true - '10'; //-9
var n = false - '10'; //-10


// x ** y produces the same result as Math.pow(x,y):
// JavaScript Operator Precedence Values : https://www.w3schools.com/js/js_precedence.asp

// *************JavaScript Datatypes *****************
//  Primitive           Reference
// 1. String            1.Array
// 2. Number            2.Object
// 3. Bigint(2020)      3.Date
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol

//concept of variable initialization through value and reference  
// 1.pass by value : do not mutates to the passed varaible in future if change accur in new initialised
// 2.pass by reference : mutates to the passed varaible(object) in future  if change accur in new initialised

//car = undefined;    // Value is undefined, type is undefined


// *************JavaScript Functions *****************
//function name(parameter1, parameter2, parameter3) { // code to be executed }
// name(argument1,argument2,argument3);


function toCelsius(fahrenheit) {
   return (5/9) * (fahrenheit-32);
 }
 // below "toCelsius" refers to the function object, and "toCelsius()" refers to the function result.
 document.getElementById("demo").innerHTML = toCelsius + toCelsius(77);


// *************JavaScript Objects *****************
//best practice to declare objects with conts
const car = {type:"Fiat", model:"500", color:"white"};
//to get value of a property in object 
car.type //dot notation
car["type"] //bracket notation

// to update/append/add property in a object
car["color"] = "black";

// The this keyword refers to different objects depending on how it is used:
//    In an object method, this refers to the object.
//    Alone, this refers to the global object.
//    In a function, this refers to the global object.
//    In a function, in strict mode, this is undefined.
//    In an event, this refers to the element that received the event.
//    Methods like call(), apply(), and bind() can refer this to any object.

var newObj = {
   myName : "Zulqarnain",
   nameCall : function(){
      return this.myName;
   },
}
//bind will never work on arrow function duw to it's lexigal scope 
var newObj = {
   myName : "Zulqarnain",
   nameCall : () => {
      return this.myName;
   },
}
var newObj = {
   myName : "Zulqarnain",
   nameCall() {
      return this.myName;
   },
}
var n = newObj.nameCall();
// ===================================

var newObj = {
   myName : "Zulqarnain",
   nameCall() {
      return this.myName;
   },
}
var newFunc = newObj.nameCall
newFunc();
var newFunc = newObj.nameCall.bind(newObj);
newFunc();

// *************JavaScript Events *****************
// Event handlers can be used to handle and verify user input, user actions, and browser actions
/* Syntax: <element event='some JavaScript'> */
/* Syntax: <element event="some JavaScript"> */

function onClick() {
  document.getElementById("onclick").innerHTML = Date();
}
function onMouseOut(){
   document.getElementById("btn2").style.backgroundColor = 'yellow';
}
function onMouseOver(){
   document.getElementById("btn2").style.backgroundColor = 'red';
}
function onChange() {
   var x = document.getElementById("mySelect").value;
   document.getElementById("onChange").innerHTML = "You selected: " + x;
}
function onKeyDown() {
   document.getElementById("onKeyDown").innerHTML = "You pressed a key inside the input field";
 }
 function onLoad(){
   alert("Page is loaded");
}


// *************JavaScript Strings *****************
var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //A.....Z
var text = "'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"; // 'A....Z'
var text = '"ABCDEFGHIJKLMNOPQRSTUVWXYZ"'; // "A....Z"

// Escape Character
var text = "\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\""; // "A....Z"
var text = '\'ABCDEFGHIJKLMNOPQRSTUVWXYZ\''; // 'A....Z'

// other escape sequences valid in JavaScript -- \b \n \r \t \v

// JavaScript Strings as Objects
var x = new String("John"); //The new keyword complicates the code and slows down execution speed.
var y = new String("John"); 
// (x===y) //Comparing two JavaScript objects always returns false.

//JavaScript String Methods
let text = "     ABCDEFGHIJKLMNO     PQRSTUVWXYZ   ";

console.log(text.length);
 console.log(text.slice(0,9)) ;         //dont mutate
 console.log(text.substring(-5,9));     //dont mutate & value less than 0 treated as 0     
 console.log(text.substr(6,9));         //dont mutate & second parameter specifies the length of the extracted part.
      console.log(text.substr(-9));     //dont mutate & 9 character from end
      console.log(text.substr(-3,1));   //3rd last character
 console.log(text.replace("A","Z"));    //dont mutate & replaces only the first match (case sensitive)
      console.log(text.replace(/A/g,"Z"));//replaces all (case sensitive)
 console.log(text.replaceAll("A","Z"))   //replaces all
 console.log(text.toUpperCase())
 console.log(text.toLowerCase())
 console.log(text.concat())
 console.log(text.trim())
 console.log(text.trimStart())
 console.log(text.trimEnd())
 console.log(text.padStart())
 console.log(text.padEnd())
 console.log(text.charAt())
 console.log(text.charCodeAt())
 console.log(text.split())