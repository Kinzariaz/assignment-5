//     1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
var userInput=prompt("Enter a character (number or string):");
var asciiCode=userInput.charCodeAt(0);
if(asciiCode>=65 && asciiCode<=90){
    alert("The input is an uppercase letter.");
}else if(asciiCode>=97 && asciiCode<=122){
    alert("The input is a lowercase letter.");
}else if(asciiCode>=48 && asciiCode<=57){
    alert("The input is a number.");
}else{
    alert("The input is neither a number nor a letter.");
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));
if (num1 > num2) {
    alert("The larger number is: " + num1);
} else if (num2 > num1) {
    alert("The larger number is: " + num2);
} else {
    alert("Both numbers are equal.");
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var number = parseFloat(prompt("Enter a number:"));
if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
var char = prompt("Enter a character:").toLowerCase();
if (char.length === 1) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        alert("true");
    } else {
        alert("false");
    }
} else {
    alert("Please enter a single character.");
}
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
var correctPassword="password";
var userPassword=prompt("Enter Your Password :");
if(userPassword===correctPassword){
    alert("Correct! The password you entered matches the original password");
}else{
    alert("Incorrect password");
}
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}else {
greeting = "Good evening";
}
// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
var time = prompt("Enter time in 24 hours format (e.g. 1900 for 7pm):");
var hours = parseInt(time.slice(0, 2));
var minutes = parseInt(time.slice(2, 4));
if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    alert("Invalid time format.");
} else {
    if (hours < 12) {
        alert("Good morning");
    } else if (hours < 18) {
        alert("Good day");
    } else {
        alert("Good evening");
    }
}
