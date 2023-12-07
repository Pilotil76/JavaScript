
/*let students = [""];


for (let index = 0; newName = "" ; index = index + 1);
newName = prompt("Please enter a new student name : " );


students.push (newName);
document.write (students[index]);
let numberOf*/
let numberOfStudents = prompt("How many students?");
document.write(numberOfStudents);
let studentsNew = [];
for (index = 0; index < numberOfStudents ; index = index + 1){
studentsNew.push(prompt("Add name"));
document.write("<p>", studentsNew[index], "</p>");
}
studentsNew.sort();
document.write("<p> Sorted ", "</p>");
for (index = 0; index < numberOfStudents ; index = index + 1){
document.write("<p> ", studentsNew[index], "</p>");
}
