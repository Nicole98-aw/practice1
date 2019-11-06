//strings
console.log('hello,world');

let email = 'nickyco98@gmail.com';
console.log(email);

//string concatenation
let firstName = 'Cocoli';
let lastName = 'Brown';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[2]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullNmae);

let index = email.indexOf('@');
console.log(index);

let email = 'nickyco98@gmail.com';
// let result = email.lastIndexOf('i');

//let result = email.slice(0,6);

//let result = email.substr(0,6);

//let result = email.replace('n', 'm');

let result = email.replace('i', 'e');

  console.log(result);

  //Numbers
  let radius = 10;
  const pi = 3.14;

  //console.log(radius,pi);

//Math operators +,-,/,*,**,%

// console.log(10/5);
// let result = radius % 3;
//let result = pi * radius**2// ** means power of two

// order of operation - B I D M A S
//let result = 5 * (10-3)**2;

//console.log(result);

let likes = 10;

//likes = likes + 1;
//likes++;
//likes--;

//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;

//console.log(likes);

//NaN
//console.log(5 * 'hello');
  
let result = 'the blog has' + likes + 'likes';
console.log(result);

//template strings
const title = 'Best reads of 2019';
const author = 'Cocoli';
const likes = 30;

//concatenation way
// let result = 'The blog called' + title + 'by' + author + ' has ' + likes + ' likes;'
// console.log(result);

//template strings way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = 
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has${likes} likes</span>

    console.log(html);

let ninjas = ['Leon','Erick','Nicole'];

// ninjas[1] = 'Bianca ';
// console.log(ninjas);
// console.log(ninjas[1]);    

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['Bianca','Scott',20,21];
// console.log(random);

// console.log(ninjas.length);

//array methods
//let result = ninjas.join(',');
//let result = ninjas.indexOf('Scott');
//let result = ninjas.concat(['Kyle', 'Gandolfo']);
//let result = ninjas.push('Moss');  //returns the length of the array
//let result = ninjas.pop(); //removes the last element from the array and retuns it


console.log(result);

//smaller case letters are greater than upper case letters

//type conversion involves turning one data type into another data type
let score = '100';

// score = Number(score);
// console.log(score + 1);

// let result = String(50);
//let result = Boolean(50); //-> true
//let result = Boolean(0); //-> false
//let result = Boolean('0'); //->true
//let result = Boolean(''); //-> false
console.log(result, typeof result);