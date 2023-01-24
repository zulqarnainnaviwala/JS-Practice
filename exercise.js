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
var age = 17;
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
var fruits = ["Apple", "Banana", "Orange"];
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
// document.getElementsByClassName("test")[0].innerHTML = "Hello";
document.getElementById("demo").style.display = "none";
// document.getElementById("myText").value = "Have a nice day!";
// document.getElementById("demo").addEventListener("click", myFunction)



var fruits = ["Apple",{name: "zulqarnain"}, "Orange"];

for (x of fruits ) {
    if (typeof(x)=== "object"){
        console.log(x.name)
    }else{
          console.log(x);  
    }
}
// JS is single threaded program , so how Async behavior acheiving (event loop concept : link to video below) 
//https://www.youtube.com/watch?v=8aGhZQkoFbQ