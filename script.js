var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var copyBtn2 = document.querySelector("#copy2");
var display = document.querySelector("#password");
var slider = document.querySelector("#length");

//generate random password when you click generateBtn
generateBtn.addEventListener("click", function (event) {

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
    document.getElementById("prevPass").innerHTML += password + "<hr>" + "<br />";
});

//function to copy password to clipboard
copyBtn.addEventListener("click", function (event) {
    display.select();
    document.execCommand("Copy");
    $("#success").show();
    setTimeout(function () {
        $("#success").hide(1000);
    }, 3000);
});

//function to copy previously generated password that is highlighted
copyBtn2.addEventListener("click", function (event) {
    document.execCommand("Copy");
    $("#success").show();
    setTimeout(function () {
        $("#success").hide(1000);
    }, 3000);
});

//set default slider length to 25
document.getElementById("length").innerHTML = "Length: 25";

document.getElementById("slider").oninput = function () {
    if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 1";
    }
}