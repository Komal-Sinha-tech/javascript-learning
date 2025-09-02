console.log("Hello JavaScript!!")

let colour ="green";
//Traffic light System

if(colour==="red"){
console.log(" Stop")

} if(colour ==="green"){
    console.log("go")

}if(colour ==="yellow"){
    console.log("slow")

}


let size="L";
//popcorn prices

if (size==="XL"){
    console.log("250 rupees")
}else if (size==="L"){
    console.log("200 rupees")
}else if (size==="M"){
    console.log("100 rupees")
}else if (size==="S"){
    console.log("50 rupees")
}

let marks=67;
//Grade
if(marks>=33){
    console.log("pass")
    if(marks>=80){
        console.log("Grade: O")
    }else{
        console.log("Grade: A")
    }
}else{
    console.log("Better Luck Next Time")
}

let string ="apple"

if((string[0]==='a')&& (string.length>=3)){
    console.log("string is good")
}else{
    console.log("string is bad")
}

let day="5";

switch(day){
    case "1":
        console.log("Monday");
        break;
        case "2":
        console.log("tuesday");
        break;
        case "4":
        console.log("thursday");
        break;
        case "3":
        console.log("wednesday");
        break;
        case "5":
        console.log("friday");
        break;
        case "6":
        console.log("saturday");
        break;
        case "7":
        console.log("sunday");
        break;
}

alert("hello javascript");
console.log("this page says hello");
console.warn("this is a warning message");
console.error("this is a error message");


let firstName = prompt("enter your name: ");
console.log(firstName);