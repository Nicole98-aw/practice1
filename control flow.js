// for loops

// for(let i=0; i < 5; i++){
//     console.log('in loop;', i);
// }

// console.log('loop finished');

const names = ['Scott', 'Bianca', 'Ruffo'];

for(let i=0; i < names.length; i++){
    // console.log(i);
    // console.log(names[i]);
} 

// while loops
const names = ['Scott','Bianca','Ruffo'];
// let i=0; //declared outside the loop

// while( i < 5){
//     console.log('in loop;', i);
//     i++;
// }

let i=0;
while(i < names.length){
    console.log(names[i]);
    i++;
}

//do while loops

let i=5;

do{
    console.log('val of i is: ', i);
    i++;
}while(i < 5);

//logical operators = OR || and AND &&

const password = 'p@ssword9812';

if(password >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
}else if(password >= 8 || password.includes('@')){
    console.log('that password is strong enough!');
}else{
    console.log('password is not strong enough');
}

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i=0; i < scores.length; i++){

    if(scores[i] ===0){
        continue; //we don't want that score to log on the console therefore we should see from score 30 logged to the console
    
    }

    console.log('your score: ', scores[i]);

    if(scores[i] === 100){
        console.log('congats,you got the top score!');
        break;
    }
}

// switch statements
const grade = 'D';

switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got a B!');
        break;
    case 'C':
        console.log('you got a C!');
        break;
    case 'D':
        console.log('you got a D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade')     
}
















