var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var copy2Btn = document.querySelector("#copy2");
var display = document.querySelector("#password");
    
//generate random password when you click generateBtn
generateBtn.addEventListener("click", function(event) {
    
        //set password length/complexity
        const complexity = document.getElementById("slider").value;

        //possible password characters
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

        let password = "";

        //create for loop to randomly generate password using characters
        for (var i = 0; i <= complexity; i++) {
            password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));

        }
        //add password to input display area
display.value = password;

//add password to previously generated passwords section
document.getElementById("prevPass").innerHTML += password + "<br />";

    });




