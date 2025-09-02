# javascript-learning
📌 Repository Description: A collection of my learning notes and practice code on JavaScript functions and commonly used array methods like map(), filter(), reduce(), forEach(), and more. 🚀  This repo includes:  Basics of defining and calling functions  Function expressions and arrow functions  Examples of array iteration and transformation 



// // Array
// let studentName =["Santosh","komal"];

// //empty array
// let newArr = [];

// //creating array
// let array =["komal","20","student"];

// //strings are immutable but arrays are mutable
// let fruit =["apple","kiwi","litchi"];
// fruit[0]="grape";

//Array methods
// push:add to end
// pop: delete from end & returns it
// unshift: add to start
// shift: delete from start &returns it

// let cars=["audi","maruti","wagonR","toyota"];
// cars.push("xuv");
// cars.pop();
// cars.unshift("ferrari");
// cars.shift();

// let followers=["a","b","c"];
// let blocked = followers.shift();

// let primary =["blue","yellow","green"];
// // array method index
// console.log(primary.indexOf("yellow"));
// // array method boolean
// console.log(primary.includes("blue"));

// let secondary=["violet","orange","turquoise"];
// // merge 2 arrays
// console.log(primary.concat(secondary));
// // reverse array method
// console.log(primary.reverse());

// // array method slice 
// let colors=["red","yellow","blue","orange","pink","white"];
// console.log(colors.slice());
// console.log(colors.slice(2));
// console.log(colors.slice(2,3));
// console.log(colors.slice(-2));
// //  array.slice(start, end)

// // array method splice
// console.log(colors.splice(4));
// console.log(colors);
// console.log(colors.splice(0,1));
// console.log(colors.splice(0,1,"black","white"));
// console.log(colors);
// // array.splice(start, deleteCount)

// //sort method in array
// let squares = [25,16,4,49,36,9];
// console.log(squares.sort());

// let days=["monday","sunday","wednesday","tuesday"];
// console.log(days.sort());

// //array references => address in memory
// // []==[]  false
// // []===[] false
// // [1]==[1]  false
// // "name"==="name" true
// // "name"=="name" true

// let arr=['a','b','c'];
// let arrCopy = arr;
// // arr == arrCopy true
// // arrCopy === arr true
// console.log(arr.push('d'));

// //nested arrays or multidimensional arrays
// let nums =[[2,4],[3,6],[4,8]];
// // the 2 is size of array

// // create a nested array to show the following tic-tac-toe game
// let tic_tac_toe =[  ["X",null,"O"] ,[null,"X",null],["O",null,"X"]  ];

//loops with array
// let fruits=["mango","apple","litchi","kiwi","pineapple","banana"];

// for(i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }

// nested array
// let heroes =[
//     ["ironman","spiderman","thor"],
//     ["superman","wonderwoman","flash"]
// ];

// for(i=0;i<heroes.length;i++){
//     console.log(`list #${i}`);
//     for(j=0;j<heroes[i].length;j++){
//         console.log(heroes[i][j]);
//     }
// }

//for of loop 
//for(element of collection){
//     do something
// //    }

//  let fruits =["mango","apple","litchi","kiwi","pineapple","banana"];
//  for(fruit of fruits){
//     console.log(fruit);
//  }

 //nested for of loops
// let heroes =[
//     ["ironman","spiderman","thor"],
//     ["superman","wonderwoman","flash"]
// ];

// for(list of heroes){
//     for (hero of list){
//         console.log(hero);
//     }
// }


//write a js program to delete all occurence of element 'num; in a given array

// let arrayNew=[1,2,3,4,5,6,2,3];
// let num=2;

// for(i=0;i<arrayNew.length;i++){
//     if (arrayNew[i]== num){
//         arrayNew.splice(i,1);
//     }
// }
// console.log(arrayNew);

// Write a JS program to find the no of digits in a number
// let number=287152;
// count=0;
// while(number)



//Array Methods  (higher order functions to use callback)

//for each

// let arr =[1,2,3,4,5];

// let print=function(element){
//     console.log(element)
// }
// arr.forEach(print);

//OR

// arr.forEach (function(element){
//     console.log(element);
// }
// )

// let arr=[
// {
// name:"komal",
// marks:87,
// },
// {
// name:"santosh",
// marks:76,
// },
// {
// name:"kanishka",
// marks:65,
// }
// ];

// arr.forEach((student)=>{
//     console.log(student.marks);
// });

// arr.forEach((arg)=>{

// });



//map
// let num=[1,2,3,4,5];
// let double=num.map((element)=>{
//     return element*2;
// });


//filter
// let nums=[1,2,4,6,7,8,9,10,12,13,14];

// let ans =nums.filter((element)=>{
//    return  element%2==0;
// });

//Every  arr.every(some function defination or name);  true or false
//  let everyLearn=[2,4,6].every((el)=>   el%2==0);


//reduce  => reduces the array into a single value
//  arr.reduce(reducer function with 2 variables for (accumulator, element));

// let num=[1,2,3,4];
// let finalValue=num.reduce((result,el)=> (result+el));
// console.log(finalValue);

//finding maximum in an array
// let num=[1,2,9,5,7,8,4,6,3,21,1];
// let result=num.reduce((max,el)=>{
//    if(el>max){
//       return el;
//    }else{
//       return max;
//    }
// })


//practice question
//Q1)check if all number in our array are multiples of 10 0r not
// let num=[20,30,50,60,40,70];
// let result=num.every((el)=>el%10==0);
// console.log(result);

//Q2) create a function to find the minimum number in an array
// let num=[1,2,9,5,7,8,4,6,3,21,1];
// let result=num.reduce((min,el)=>{
//    if(el<min){
//       return el;
//    }else{
//       return min;
//    }
// })

//default parameter
// let sum=function sum(a,b=2){
//    return a+b;
// }
// sum(8);

//spread
// console.log(..."komalsinha");

//spread literals
// let arr=[1,2,3,4,5];
// let newArr=[...arr];

// let chars=[..."hello"];

// let even=[2,4,6,8];
// let odd=[1,3,5,7];
// let oneArr=[...even, ...odd];

//spread object literals
// const data={
//    email:"ironman@gmail.com",
//    name:"ironman",
//    password:"ironsuit",
// };

// const dataCopy={...data,id:1234};

//object to spread array literals in index form
// let arr=[15,26,37,48,59];
// let obj1={...arr};

//rest =>opp of spread =>allows function to take multiple number of arguments and bundle them in an array

// function sum (...args){
//    //arguments
//    for (let i=0;i<args.length;i++){
//       console.log("you gave us:",args[i]);
//    }
// }


//Destructuring
//storing values of arrays into multiple variables
// let names=["tony","bruce","peter","steve","vgyuj","buigu","cggfv"];
// // let winner=names.[0];
// // let runnerUp=names.[1];
// let[winner,runnerUp,...others]=names;

//destructuring in object
// const data={
//    email:"ironman@gmail.com",
//    name:"ironman",
//    password:"ironsuit",
//  };
//   let {mail:email,username:name}=data;

//practice questions
//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the firstobject and secondobject.

// let firstObject=["komal sinha"];
// let secondObject=["Santosh Sahu"];
// let mergeObjects=[...firstObject,...secondObject];
// console.log(mergeObjects);

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled

// const doubleAndReturnArgs = (arr,...args)=> [
//    ...arr,
//    ...args.map((el)=>el*2),
// ];
// console.log(doubleAndReturnArgs([1,2,3],4,5));

//Create a new array whose elements are in uppercase of words present in the original array.

// let arr=["komal","arunima","santosh","kanishka"];
// console.log(arr.map((string)=> string.toUpperCase()));

//Create a new array using the map function whose each element is equal to the original element plus 5

// let arr=[2,4,6,8,-2,-4];
// console.log(arr.map((num)=>num+5));

//Square and sum the array elements using the arrow function and then find the average of the array.
// let num=[2,4,6,8,10];
// let square= num.map((el)=>el*el);
// let sum=num.reduce((acc,el)=>acc+el);
// let avg=sum/num.length;
