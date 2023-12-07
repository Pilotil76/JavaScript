let students = ["Olena", "Igor", "Komal", "Mila", "Abdul"] ;


function printArray(myHeading)
{
    document.write("<h1>", myHeading, "</h1>");
    document.write("<hr>");
    for (index = 0; index < students.length ; index = index + 1)
    {
    document.write("<p>", students[index], "</p>");
    }
}
printArray("Original Array");
students.push(prompt("Add name"));
printArray("Updated Array");
students.sort ();
printArray("Sorted Array");

