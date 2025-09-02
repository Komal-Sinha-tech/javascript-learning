const max=prompt("enter the number:");

const random = Math.floor(Math.random()*max)+1;


let guess=prompt("guess the number:");

while(true){

    if(guess==="quit"){
        console.log("quitting the game");
        break;
    }else if(guess == random){
        console.log("You are right. Congrats!!random number was",random);
        break;
    }else if(guess < random){
       guess=prompt("Hint: your guess is small. please try again!"); 
    }
    else if (guess > random){
       guess=prompt("Hint: your guess is big. please try again!"); 
    }


}