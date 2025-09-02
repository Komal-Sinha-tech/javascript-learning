const favMovie ="avatar";

let guess = prompt("guess favourite movie");

while((guess != favMovie)&& (guess != quit)){

    guess= prompt("wrong guess try again!");

}

if(guess == favMovie){
        console.log("congratss!");
    }else{
        console.log("quit");
    }