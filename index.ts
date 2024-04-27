// CLI BASED NUMBER GUESSING GAME(STATIC APPROACH)

// Assume that the game's behavior and outcomes are predefined and fixed, without much variation or user interaction. 

let selectedNumber:number=8;//user's entered number
let randomNumber:number=Math.floor(Math.random()*14+1)// Math is a class and random and floor is its predefined functions. Math.random number is used to generate a random number . Math.random () generates number between 0 and 1 , to increase the generator value we multiply this function with our desired need. and then finally we round off number by using Math.floor method or It returns the largest integer less than or equal to a given number.

//here it generates a number 0 to 14 and +1 = upto 15

//console.log(randomNumber)// for testing purpose only.


if(selectedNumber===randomNumber){
    console.log(" You Win, You guess the right number")
}
else{
    console.log("You Lost", "Try Again");
    
}
//Author-Huma Mohsin