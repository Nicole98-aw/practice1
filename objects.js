// // object literals

// // let user = {
// //     name: 'Cocolii',
// //     email: 'nickyco98@gmail.com',
// //     blogs: ['why mac and cheese rule', '10 things you can do with marmite'],
// //     login: function(){
// //         console.log('user logged in');
// //     },
//     // logout: function(){
//     //     console.log('the user logged out');
//     // },
//        logBlogs: function(){
//             console.log(this.blogs);
//             console.log('this user has written the following blogs:');
//             this.blogs.forEach(blog => {
//                 console.log(blog);
//             }) 
//        } 
          
// // };
//    user.logBlogs();
//    console.log(this);
// // user.login(); expected output -> user logged in.

// // Math object

// const area = 7.7;

// console.log(Math.round(area)); ->rounds a num to the nearest integer either up or down depending on its decimal

// console.log(Math.floor(area)); -> takes a no and floor it to a no below it

// console.log(Math.ceil(area)); -> rounds up

// console.log(Math.trunc(area)); -> takes away the decimal

// // random numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));

// // primitive values - if you change the value of one it doesn't affect the value of another

// let  scoreOne = "name";

// let scoreTwo = scoreOne;
// scoreOne = "Nicole"; 

// console.log(scoreTwo);  // the value stored in scoreTwo should be 50

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values - opposite of primitive values

// const userOne = { name: 'Nicole', age: 21};
// const userTwo = userOne;

// console.log(`${userOne}, ${ userTwo}`);

// userTwo.age = 40;
// console.log(userOne, userTwo);

// const artists = ['Beyonce', 'Minaj', 'Rihanna', 'Derulo'];

// const favArtist = artists.filter(artist => {
//     return artist.length < 7;
// });
// console.log(favArtist);
// const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

// const favWords = words.filter(word => {
//     return word.length < 6;
// });

// console.log(favWords);

// const shoes = ['heels', 'wedges', 'falts', 'canvas', 'boots'];

// const favShoes = shoes.filter(map => {
//     return shoes.length < 6;
// });
// console.log(favShoes);


// const numbers = [1,2,3,4,5];

// const summedNumbers = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 100);
// console.log(summedNumbers);

// const newNumbers = [1,2,3,4,5];

// const newSum = newNumbers.reduce((accumulator, currentValue) => {
//     console.log(currentValue);
// });


// // immutability
// function doubleThemImmutable(list){
//   var newList = [];
//   for(var i =0; i < list.length; i++){
//     newList[i] = list[i] * 2;
//   }
//   return newList;
// }
// var arr = [3,4,5];
// var arr2 = doubleThemImmutable(arr);


// // let spaceShip = {
// //   'Fuel Type' : 'Turbo Fuel',
// //   homePlanet : 'Earth',
// //   color: 'silver',
// //   'Secret Mission' : 'Discover life outside of Earth.'
// // };
// // console.log(spaceShip);

// // Write your code below

// // spaceship.color = 'glorious gold';

// // console.log(spaceShip);

// // spaceship.numEngines = 9;

// // delete spaceship['Secret Mission'];

// // // closures - is when a function 'remembers' the variables around it even when that function is executed elsewhere
// // function foo() {
// //   var count = 0;

// //   return function(){
// //     return count++;
// //   };
// // }
// // var x = foo();

// // x();


// // function sumX(x) {
// //   return function(y) {
// //     return x + y;
// //   };
// // }
// // var add10 = sumX(10);

// // add10(3); // 13
// // add10(14); // 24

// // function foo(x, y) {
// //   return function() {
// //     return x + y; // closure happens here
// //   }
// // }
// // var x = foo(3, 4);

// // x(); // 7
// // x(); // 7


// // recursion - is when a function calls itself within itself
// function sumIter() {
//   var sum = 0;
//   for(var i=0; i < arguments.length; i++){
//     sum = sum + arguments[i];
//   }
//   return sum;
// }
// sumIter(3,4,5);

// function sumRecur(...args) {
//   if (args.length <= 2) {
//     return args[0] + args[1];
//   }
//   return (
//     args[0] +
//     sumRecur(...args.slice(1))
//   );
// }
// sumRecur(3,4,5);


// function mult(...args) {
//   if(args.length <= 2) {
//     return args[0] * args[1];
//   }
//   //recursive call
//   return args[0] * mult(...args.slice(1));
// }

// mult(3,4,5);

// mult(3,4,5,6);


let retreatMessage = 'We do not wish to conquer your planet anymore,it is full of dogs';

let alienShip = {
  retreat(){
    console.log(retreatMessage);
  },
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};
retreat();

takeOff();


// Write an `addn(..)` that can take an array of 2 or more functions, and using only `add2(..)`, adds them together.Try it with aloop(recursion).Try it with built-in array functional helpers(map/reduce).
//LOOP
function addn(arr) {
  var sum = 0;
  for(var i=0; i < arr.length; i++){
    sum = add2(foo(arr[i]), foo(sum));
  }
  return sum;
}
addn([10,42,56,73]);
