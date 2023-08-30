// //  ___Task 1 - 7____
    // let studentNamesLiteral = [];
    // let studentNamesObject = new Array();
    // let stringsArray = ["apple", "banana", "cherry", "date"];
    // let numbersArray = [1, 2, 3, 4, 5];
    // let booleanArray = [true, false, true, true, false];
    // let mixedArray = ["apple", 2, true, "banana", false, 3];
    // let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
    // // Display qualifications in the browser
    // document.write("<h2>Available Education Qualifications in Pakistan:</h2>");
    // document.write("<ul>");
    // for (let i = 0; i < educationQualifications.length; i++) {
    //     document.write("<li>" + educationQualifications[i] + "</li>");
    // }
    // document.write("</ul>");
    
    // //  ___Task 8____
    // // Declare arrays for student names and scores
    // var studentNames = ["Alice", "Bob", "Charlie"];
    // var studentScores = [420, 380, 450];
    // // Calculate total marks
    // var totalMarks = 500;
    // // Display scores and percentages for each student
    // document.write("<h2>Student Scores and Percentages:</h2>");
    // // Student 1
    // document.write("Name: " + studentNames[0] + "<br>");
    // document.write("Score: " + studentScores[0] + "<br>");
    // document.write("Percentage: " + (studentScores[0] / totalMarks) * 100 + "%<br><br>");
    // // Student 2
    // document.write("Name: " + studentNames[1] + "<br>");
    // document.write("Score: " + studentScores[1] + "<br>");
    // document.write("Percentage: " + (studentScores[1] / totalMarks) * 100 + "%<br><br>");
    // // Student 3
    // document.write("Name: " + studentNames[2] + "<br>");
    // document.write("Score: " + studentScores[2] + "<br>");
    // document.write("Percentage: " + (studentScores[2] / totalMarks) * 100 + "%<br><br>");

   // //  ___Task 9____
   // Initialize the array with color names
    // var colorNames = ["Red", "Green", "Blue", "Yellow", "Orange"];

    // // Display the original array
    // document.write("<h2>Original Array:</h2>");
    // document.write(colorNames + "<br><br>");
    // // a. Add color to the beginning
    // var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
    // colorNames.unshift(colorToAddBeginning);
    // document.write("<h2>After Adding Color to Beginning:</h2>");
    // document.write(colorNames + "<br><br>");
    // // b. Add color to the end
    // var colorToAddEnd = prompt("Enter a color to add to the end:");
    // colorNames.push(colorToAddEnd);
    // document.write("<h2>After Adding Color to End:</h2>");
    // document.write(colorNames + "<br><br>");
    // // c. Add two colors to the beginning
    // colorNames.unshift("Violet", "Indigo");
    // document.write("<h2>After Adding Two Colors to Beginning:</h2>");
    // document.write(colorNames + "<br><br>");
    // // d. Delete the first color
    // colorNames.shift();
    // document.write("<h2>After Deleting First Color:</h2>");
    // document.write(colorNames + "<br><br>");
    // // e. Delete the last color
    // colorNames.pop();
    // document.write("<h2>After Deleting Last Color:</h2>");
    // document.write(colorNames + "<br><br>");
    // // f. Add color at a specific index
    // var indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
    // var colorToAdd = prompt("Enter the color to add at the index:");
    // colorNames.splice(indexToAdd, 0, colorToAdd);
    // document.write("<h2>After Adding Color at Index:</h2>");
    // document.write(colorNames + "<br><br>");
    // // g. Delete colors at a specific index
    // var indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
    // var numToDelete = parseInt(prompt("Enter the number of colors to delete:"));
    // colorNames.splice(indexToDelete, numToDelete);
    // document.write("<h2>After Deleting Color(s) at Index:</h2>");
    // document.write(colorNames + "<br><br>");

    // //  ___Task 10____
    // // Initialize the array with student scores
    // var studentScores = [85, 72, 95, 64, 78, 90, 60];
    // // Display the original array
    // document.write("<h2>Original Student Scores:</h2>");
    // document.write(studentScores + "<br><br>");
    // // Sort the array in ascending order
    // studentScores.sort(function(a, b) {
    //     return a - b;
    // });
    // // Display the sorted array
    // document.write("<h2>Sorted Student Scores (Ascending Order):</h2>");
    // document.write(studentScores + "<br><br>");


   // //  ___Task 11____
   // Initialize the array with city names
    // var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

    // // Initialize the selectedCities array
    // var selectedCities = [];

    // // Copy three elements from cities array to selectedCities array
    // selectedCities = cities.slice(0, 3);

    // // Display the selectedCities array
    // document.write("<h2>Selected Cities:</h2>");
    // document.write(selectedCities + "<br><br>");

   // //  ___Task 12____
   // Initialize the array
    // var arr = ["This", "is", "my", "cat"];
    // // Create a single string using the join method
    // var singleString = arr.join(" ");
    // // Display the single string
    // document.write("<h2>Single String:</h2>");
    // document.write(singleString + "<br><br>");

   // //  ___Task 13____