let student={
    name:"komal",
    age:20,
    marks:57,
    city:"mumbai",
    colors: ["red","white","pink"]
    // key: value,
};
student.city="delhi";

//Thread /Twitter post
let twitterPost ={
    username: "sinhak.7",
    content: ["pic","post","blog"],
    likes: 124,
    reposts: 25,
    tags:["santosh","kanishka","rutuja"],
};

//nested objects

// let classInfo ={
// komal:{
// grade:"B+",
// city:"Mumbai",
// },
// Amisha:{
// grade:"A+",
// city:"Delhi",
// },
// Santosh:{
// grade:"O+",
// city:"Mumbai",
// },

// };


let classInfo=[
{
grade:"B+",
city:"Mumbai",
},

{
grade:"B+",
city:"Mumbai",
},
{
grade:"O+",
city:"Mumbai",
},
];


//Maths.PI
//Maths.E
//Maths.abs(n)
//Maths.pow(a,b)
//Maths.floor(n)
//Maths.ceil(n)
//Maths.random()

// let step1 = Math.random(); //step1
// let step2 = step1*10; //step2 1 to 10 numbers that's why
// let step3 =Math.floor(step2); //step 3 max round of number
// let step4 =step3+1;


// let num= Math.random();
// num=num*5;
// num=Math.floor(num);
// num=num+1;



//assignment 
const diceRoll=Math.floor(Math.random()*6)+1;
console.log(diceRoll);

let car={
    name:"audi",
    model:"3rd gen",
    color:"matt black",
};
console.log(car.name);


let person={
    name:"Komal",
    age:20,
    city:"mumbai",
};
person.city="New York";
console.log(person.city);
person.country="United States";
console.log(person);
