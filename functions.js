// function declaration
function greet(){
    console.log('hello there!');
}
greet();

//hoisting
greet();

function grret(){
   console.log('helo there') 
}
 
// function expression
const speek = function(){
    console.log('good day');
};
speak();

// arguments and parameters

const speek = function(name, time){ // parameters
    console.log(`good day ${time} ${name}`);
};
speak('Wedekind', morning ); //arguments 

const calcArea = function(radius){
    return 3.14 * radius**2;
   
}
const area = calcArea(5);
console.log(area);

// reusing a value that a function gave to us
const calcVol = function(area){

};
calcVol(area);

//arrow functions
const calcArea = (radius) => {
    return 3.14 * radius**2;  
};

// const greet = () => 'hello world';
// const result = greet();
// console.log(result);
    
// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([10,15,30], 0.2));

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill([10,15,30], 0.2)); 
 
// callback and forEach - callback functions are functions we pass into other functions or methods as arguments

// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value){
//     console.log(value);
// });

let people = ['Bianca','Ruffo','Scott','Gandolfo','Wedekind'];

// people.forEach(function(person){
//     console.log(person);
// }); expected output ->list of people

// people.forEach(function(person){
//     console.log('people');
// });  expected output -> 5 people

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson);