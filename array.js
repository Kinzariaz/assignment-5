// ==================ARRAYS============================
// 1. Declare an empty array using JS literal notation to store
// student names in future.
var studentNames = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
var studentNames = new Array();

// 3. Declare and initialize a strings array.
var arrayOfStrings=["sun","flowers","window"];

// 4. Declare and initialize a numbers array.
var arrayOfNumbers = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
var arrayOfBooleans = [true, false, true];

// 6. Declare and initialize a mixed array.
var mixedArray = ["apple", 42, true, "banana", 3.14];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
for(var i=0;i<qualifications.length;i++){
    document.write(i+")"+qualifications[i] + "<br>");
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var studentNames = ["Alice", "Bob", "Charlie"];
var studentScores = [450, 380, 420];
var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%<br>");
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
var colors=["Violet","Indigo","Blue","Green","Yellow","Orange","Red"];
document.write("Colors: " + colors.join(", ") + "<br>");
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
var newColor = prompt("Which color do you want to add to the beginning?");
colors.unshift(newColor);
document.write("Updated Colors: " + colors.join(", ") + "<br>");
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
var newColor = prompt("Which color do you want to add to the end?");
colors.push(newColor);
document.write("Updated Colors: " + colors.join(", ") + "<br>");
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
colors.unshift("Pink", "Cyan");
document.write("Updated Colors: " + colors.join(", ") + "<br>");
// d. Delete the first color in the array. Display the updated
// array in your browser.
colors.shift();
document.write("Updated Colors: " + colors.join(", ") + "<br>");
// e. Delete the last color in the array. Display the updated
// array in your browser.
colors.pop();
document.write("Updated Colors: " + colors.join(", ") + "<br>");
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
var index = prompt("At which index do you want to add a color?");
var colorName = prompt("Which color do you want to add?");
colors.splice(index, 0, colorName);
document.write("Updated Colors: " + colors.join(", ") + "<br>");
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
var deleteIndex = prompt("At which index do you want to delete color(s)?");
var deleteCount = prompt("How many colors do you want to delete?");
colors.splice(deleteIndex, deleteCount);
document.write("Updated Colors: " + colors.join(", ") + "<br>");

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var studentScores = [450, 380, 420];
studentScores.sort(function(a, b) {
    return a - b;
});
document.write("Sorted Scores: " + studentScores.join(", ") + "<br>");

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(0, 3);
document.write("Selected Cities: " + selectedCities.join(", ") + "<br>");

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arr = ["This ", " is ", " my ", " cat"];
var str = arr.join("");
document.write("Array:"+arr+"<br>")
document.write("String: " + str + "<br>");

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var fifoArray = [];
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");
document.write("DEVICES: " + fifoArray.join(", ") + "<br>");
document.write("OUT: " + fifoArray.shift() + "<br>");
document.write("OUT: " + fifoArray.shift() + "<br>");
document.write("OUT: " + fifoArray.shift() + "<br>");
document.write("OUT: " + fifoArray.shift() + "<br>");

// 14. Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)
var lifoArray = [];
lifoArray.push("Keyboard");
lifoArray.push("Mouse");
lifoArray.push("Printer");
lifoArray.push("Monitor");
document.write("DEVICES: " + lifoArray.join(", ") + "<br>");
document.write("OUT: " + lifoArray.pop() + "<br>");
document.write("OUT: " + lifoArray.pop() + "<br>");
document.write("OUT: " + lifoArray.pop() + "<br>");
document.write("OUT: " + lifoArray.pop() + "<br>");

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");