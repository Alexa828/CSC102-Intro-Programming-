// functions are a nice way to orginize our code and make our code reusable
// use a descriptive function name - functions do something, so make it a verb/action
// () can hold function argument - if you need to pass information to the function

function PlayDice(){
    // log that the function was called
    console.log("PlayDice() function was called");

    // roll die 1
    let roll1 = rollDice();

    // roll die 2 
    let roll2 = rollDice();

    console.log("roll1=" + roll1);
    console.log("roll2=" + roll2);

    // calculate the rolls
    let sum = roll1 + roll2;

    // display roll 1 in the roll 1 dive
    document.getElementById("divRoll1").textContent = "Roll 1: " + roll1;

    // display roll 1 in the roll 1 dive
    document.getElementById("divRoll2").textContent = "Roll 2: " + roll2;

    // display the sum in the sum div
    document.getElementById("divSum").textContent = "Sum: " + sum;

    // variable to hold the result
    let result = "";

    // see if the user lost - if they rolled sum of 7 or 11
    // || - means or
    // && - means and 
   
    // ******
    //  added logic here - todo: after completing assignment 5, change back to ||
    // ******

    if (sum == 7 || sum ==11){
        console.log("you lost");
        result = "Sorry! You lost!";
    }
    // check if we rolled an even number
    // modulus - do a division problem and we get the remainder as the result
    // 2/2 = 1 with no remainder = even number;
    // 4/2 = 2 with no remainder = even number;
    // 5/2 = 2 with a remainder of 1 = odd number 
    // roll1 % 2 == 0 - this will be true if we have an even number 
    // we also need to make sure that roll1 and roll2 resulted in the same value
    else if(roll1 % 2 == 0 && roll1 == roll2){
        console.log("you won")
        result = "Congratulations! You won!";
    }
    // the catch-all else statement if neither of the above statements evaluated to true, this else statment will run
    else{
        console.log("you tied (pushed)")
        result = "You tied (you pushed)!";
    }

    // show the result in teh result div
    document.getElementById("divResult").textContent = result;

    
}

// create a function to generate a random number 
function rollDice(){
    // create a variable to hold a random number 
    // Math.random() is a built in JavaScript function which generates a random number
    let die = Math.random() * 6; // I wante to replicate a 6 sided die

    // round the number and return the value
    
    return Math.ceil(die);
}

/************** */
// code to move the home page
/************** */
  // this function will validate the user's input
            function validateForm(){
                let fullName = "";

                // get the value the user enetered in for their first name
                // we will remove any spaces at the beginning or end with trim()
                let FirstName = document.getElementById("txt_First_Name").value.trim();
                // get the user's last name
                 let LastName = document.getElementById("txt_Last_Name").value.trim();
                //  get the user's zip code
                 let ZipCode = document.getElementById("txt_Zip_Code").value.trim();

                console.log("FirstName=" + FirstName);
                console.log("LastName=" + LastName);
                console.log("ZipCode=" + ZipCode);

                // validation - we need to make sure that the first name + " " + lsst name is less than 20 characters
                // zip code needs to be exactly 5 digits

                // variable to hold store the message that we will display to the user
                let message = "";

                // concatenate (add) first name + " " + last name"
                fullName = FirstName + " " + LastName;

                console.log("fullName=" + fullName);

                // varify the number of charaacters in the full name variable 
                if (fullName.length > 20 || fullName.length == 1){
                    // an invalid name has been entered
                    message = "Not a valid Name, please try again."; 
                    console.log("Not a valid Name");
            }
            else if (ZipCode.length !=5){
                // a zip code that is not 5 characters exactly was entered
                message = "Not a valid Zip Code, please try again.";
                console.log("Not a valid Zip Code");
        }
        else{
            // create a message of success - display a secret word and/or welcome
            message = "Welcome, " + FirstName + ". The secret word is validation.";
        }
        
        // display the message to the user on the div in the HTML section 
        document.getElementById("divmessage").textContent = message;

    }


     // this variable will keep track of the current interval - so we can stop the interval
            let intervalID = 0;

            // this function will start the image moving around
            function startMove(){
                // create a shortcut/nickname to the image in the HTML
                let image = document.getElementById("memeimage");

                // store the current interval id
                intervalID = setInterval(function(){
                    // the code that runs repeatedly
                    let xCord = getRandNum();
                    let yCord = getRandNum();


                    // change the x cord 
                    image.style.left = xCord + "px";
                    image.style.top = yCord + "px";

            }, 600); // this code will run every second

            // swap the buttons being enabled 
            document.getElementById("btnStart").disabled = true; // no click start
            document.getElementById("btnStop").disabled = false; // click stop
         }

        //  function to stop image from moving
        function stopMove(){
            // call clear interval and pass in the interval id
            clearInterval(intervalID);

            // swap the buttons being enabled 
            document.getElementById("btnStart").disabled = false; // click start
            document.getElementById("btnStop").disabled = true; // no click stop

        }

        //  function to randomly generate a number
        function getRandNum(){
        //get a random number between 0 and 799
        return Math.floor(Math.random() * 800);
        }