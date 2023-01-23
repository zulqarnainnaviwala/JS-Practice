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

car = undefined;    // Value is undefined, type is undefined


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

// *************JavaScript Events *****************



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

Math.max(10,71,25,785);  //785
Math.max(10,71,25,"458");//458
Math.max(10,71,25,"A58");//NaN
 
Math.round(15.3); //15
Math.floor(15.9); //15
Math.ceil(15.1); //16
Math.sqrt(9); //3

// Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
var age = n;
var voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable);

var {log:print}=console; //console.log is now print
print("hello");

//Add a section that will alert("Neither") if fruits is neither "banana" nor "apple".
switch
(fruits) {  
case "Banana":
    alert("Hello")
    break;
case "Apple":
    alert("Welcome")
    break;   
default:
   alert("Neither");
}

//for of to iterate on array and getting each index value
const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits ) {
  console.log(x);
}
var i = 0;
while(i<10){
   console.log(i);
   i++;
}

document.getElementById("demo").innerHTML = "Hello";
document.getElementsByTagName("p")[0].innerHTML = "Hello";
document.getElementsByClassName("test")[0].innerHTML = "Hello";
document.getElementById("demo").style.display = "none";
document.getElementById("myText").value = "Have a nice day!";
document.getElementById("demo").addEventListener("click", myFunction)

// JS is single threaded program , so how Async behavior acheiving (event loop concept : link to video below) 
//https://www.youtube.com/watch?v=8aGhZQkoFbQ
// var fruits = ["Apple",{name: "zulqarnain"}, "Orange"];
// for (x of fruits ) {
//     if (typeof(x)=== Object){
//         console.log(x[1])
//     }else{
//           console.log(x);  
//     }
  
// }