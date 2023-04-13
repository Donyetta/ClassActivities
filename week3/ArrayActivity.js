// Array Activity 1
// Create an Array called students that contains the names of 5 students
const students = ["Mary", "Joe", "Max", "Rose", "Dexter"];
// Use bracket notation to access and print the name of the 4th student in the list, then print the name of the student in index 2
console.log("The 4th student is: " + students[3]);
console.log("The 2nd index is: " + students[2]);

// Loop over the Array to print out each name
for (let student of students) {
  console.log(student);
}
// Array Activity 2
// Create a variable called roster and assign it the value of the string below
// "These are the students in the list: "
let roster = "These are the students in the list: ";
// Loop over the Array again, but this time each iteration of the loop should add the
for (let student of students) {
  roster += `${student} `;
}
console.log(roster);
