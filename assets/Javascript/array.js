let students = ["Olena", "Igor", "Komal", "Mila", "Abdul"] ;

document.write ("<p>", students[0], "</p>");
document.write ("<p>", students[1], "</p>");
document.write ("<p>", students[4], "</p>");

let studentCount = students.length;
document.write ("<p> , Number of elements = ",studentCount, "</p>");

for (let index = 0 ; index < studentCount ; index = index + 1);
document.write ("<p> , Students = ", [index] , "</p>");