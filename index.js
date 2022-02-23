console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello); // logs undefined 
// hello = 'world';

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
/* 
needle = 'haystack';
test();
needle = 'magnet';
console.log(needle); // logs magnet
*/
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
/* 
brendan = 'super cool';
print(); // no se ejecuta
console.log(brendan); // logs super cool
*/
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/*
food = 'chciken';
console.log(food); // logs chicken 
eat();
food = 'half-chicken';
console.log(food); // logs half-chciken
var food = 'gone'; // no es logeado
*/ 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
/* sintaxis error
mean(); // no es una función
console.log(food) // logs undefined
*/ 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
/*
var genre // hace hoisting
console.log(genre); // logs undefined
var genre = "disco";
rewind();
function rewind(){
    genre = "rock";
    console.log(genre); // logs rock
    var genre = "r&b";
    console.log(genre); // logs r&b
}
console.log(genre); // logs disco
*/
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
/* 
dojo = "san jose"; 
console.log(dojo); // san Jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); // logs seattle
    var dojo = "burbank";
    console.log(dojo); // logs burbank
}
console.log(dojo); // logs san jose
*/
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
/* 
    console.log("Chicago", 65)); // logs {name: 'Chicago', students: 65, hiring: true}
    console.log(makeDojo("Berkeley", 0)); // logs Uncaught TypeError: Assignment to constant variable.
*/