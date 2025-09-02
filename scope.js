let sum=56;// global scope

function calSum (a,b){
    let sum= (a+b); //Function scope
    console.log(sum);
}

calSum(1,2);

//lexical scope nested function
function outerFunc(){
    let a=5;
    let b=7;
    function innerFunc(){
        console.log(a);
    }

    ineerFunc();
}

//function expression
//a variable with a function

let add= function(a,b){
    return(a+b);
}

//higher order function
//a function that does one or both 
//multiple function or return value

function multipleGreet(func,count){
    for(let i=1;i<=count;i++){
     func();
    }  
}
let greet=function(){
    console.log("Hello");
}

multipleGreet(greet,100);

// function oddOrEvenFactory(request){
//     if(request=="odd"){
//         let odd= function (n){
//             console.log(!(n%2==0));
//         }
//         return odd ;
//     }else if(request=="even"){
//         let even =function (n){
//             console.log(n%2==0);
//         }
//         return even;
//     }else{
//         console.log("wrong request");
//     }
// }

// methods

// const calculator={
//      add:function(a,b){
//     return a+b;
//     },
//     sub:function(a,b){
//     return a-b;
//     },
//     mul:function(a,b){
//     return a*b;
//     },

// };


//this keyword function cannot access directly the parameter so this keyword is used

// const student = {
// name:"komal",
// age:20,
// education:"BE",
// eng:78,
// maths:45,
// phy:79,
// getAvg(){
// let avg=(this.eng+this.maths+this.phy)/3;
// console.log(`${this.name} got avg marks = ${avg}`);
// }

// };

// Arrow function
// const mul =(a,b) =>{
//     console.log(a*b);
// }
// mul(2,3);

//Implicit(automatic) arrow function
// const mul=(a,b)=>{
//     (a*b);
// }
// mul(9*8);

// const mul=(a,b)=>(a*b);

// console.log("hy there!!");
// setTimeout(() =>{
//     console.log("komal's home")
// }
// ,6000)
// console.log("Welcome to")


// let id=setInterval(() =>{
//     console.log("komal's home")
// }
// ,4000)

// console.log(id);
// clearInterval(id);

// let id2=setInterval(() =>{
//     console.log("Welcome")
// }
// ,3000)
// console.log(id2);
// clearInterval(id2);

// this with arrow function
//function ( scope -> this -> calling object)
//arrow { lexical scope (nested)  -> parent -> call scope }

// const student={
//     name:"komal",
//     marks:87,
//     prop:this,//global scope
//     getName:function(){
//         console.log(this);
//         return this.name;
//     },

//     getMarks:function(){
//         console.log(this);
//         return this.marks;//parent's scope
//     },
// };




//practice question 
//write an arrow function that returns the square of a number n

// let n=6;
// const squareFunc =(n) =>{
//  console.log(n*n);
// }
// squareFunc(6);

// const square=(n)=>n*n;
// console.log(square(4));


//write a function that prints "hello world" 5 times at interval of 2s each

// let greeting=function(){

// my method setInterval(() => {
//    let greet=console.log("hello world");  
// },2000)
// }
// greeting();

let id=setInterval(()=>{
    console.log("hello world");
},2000);

setTimeout(()=>{
    clearInterval(id);
},10000);