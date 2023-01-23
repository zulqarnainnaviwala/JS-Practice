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
let name; 
const name = 'z';
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

//     Change the properties of constant object
const obj = {name:'z', };
obj.age=12;



// *************JavaScript Operators *****************

// Arithmetic Operators     +  -  *  /  %  --  ++  **(ES2016) 
// Assignment Operators     =  +=  -=  *=  /=  %=  **=
// Comparison Operators     ==   ===   !=  !==  >  <  >=   <=  ?
// Logical Operators        && || !
// Conditional Operators    
// Type Operators           typeof   instanceof(Returns true if an object is an instance of an object type)

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


// *************Exercise Imp*****************

// Use escape characters to alert We are "Vikings".
let txt = "We are \"Vikings\"";
alert(txt);
alert(txt.toUpperCase);
alert(txt.toLowerCase);
//slice txt
let x = txt.slice(10,15);
alert(x);
// remove/replace from string
let txt2 = "Hello World";
txt = txt2.replace("Hello", "Welcome");

// Use the splice() method to remove "Orange" and "Apple" from fruits.
var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1 , 2); //splice mutates the original

// Use the slice() method to get "Orange" and "Apple" from fruits.
var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.slice(1 , 3); //slice do not mutates the original

var date =  new Date();
var year  = date.getFullYear();
var month  = date.getMonth();
var day  = date.getDay();
  

