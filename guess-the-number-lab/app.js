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
    prevGuesses:[],

   play: function () {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

       do {
        this.prevGuesses.push(this.getGuess())
       } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
           

    } ,

    render: function() {
        
        let msg = ''

                 

        if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
            msg = `Congrats! You guessed the number in ${this.prevGuesses[this.prevGuesses.length - 1]}!`
        }
        else {
            msg = `Your guess is too "high" "low" Previous guesses: ${this.prevGuesses}`
        
        }
     alert(msg)
    }


  }
    game.play

        // Call the render method and render the result of the player's guess
          
    // this.prevGuesses.join(prevGuesses[high][low]).render
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


        ///still need get user input//