// const game = {
//     title: 'Guess the Number!',
//     biggestNum: 100,
//     smallestNum: 1,
//     secretNum: 35,
//     play: function() {
    //   this.secretNum = Math.floor(Math.random() * 
    //     (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
//     }
//   }
  const game = {
    title: "Guess the Number!",
    biggestNum: 100,
    smallestNum: 1,
    secretNum: 35,
    // Initialize prevGuesses as an array
   
    play: function () {
      // Get the secretNum from the range
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

        console.log(this.secretNum)
      // We want to run the game loop at least once, so a do...while loop works well here
    }
}
    game.play ()
//       const secretNum = 35

//       if(secretNum === 35) {
//           console.log('Congrats! You Guessed The Secret Number!)
      
//       }else if{ (x > 1 x < 100 !== 35)  
//         } else{
//           console.log ('Sorry, Try Again!');
// {}      
//       let secretNum = 35;
//        while secretNum <= 100 && >=1
    // Get the player's valid guess and push it into the prevGuesses array
        // Call the render method and render the result of the player's guess
        // If the player's last guess was not the secretNum, do it all again!
      // initialize a guess variable
  
        // Assign guess as an integer value parsed from the user's input to the prompt
      // While... 
        // the guess isn't a number or...
    // the guess is less than smallestNum or...
      // the guess is greater than biggestNum
  
      // After we have exited the loop return the guess
    //   return guess;
        // Assign this.smallestNum as an integer value parsed from the user's input to the prompt
        // this.smallestNum = parseInt(
        //   prompt(
        //     `Enter a number - this will be the low end of the range.`
        //   )
        // );
