// DECLARING AND INITIALIZING AN ARRAY OF NEW STUDENTS
let Students = [];
let NewStudents = ["Christopher", "Kingsley", "Victor", "Victoria", "Blessing"];
console.log(NewStudents); 


// DECLARING AND INITIALIZING A TWO DIMENSIONAL ARRAY OF STUDENTS PHACULTY
let Phaculty = [
    ["Physical Science", "Social Science", "Education"], 
    // Category 1: Phaculty
    ["Computer Science", "Psychology", "Science Education"], 
    // Category 2: Department 
    ["Data Structure", "Introduction To Psychology", "Database Design"],
    // Category 3: Course
];
console.log(Phaculty); 


//TRANSVERSING THROUGH THE NEW STUDENTS ARRAY USING FOR LOOP
for (let newStudents = 0; Students < newStudents.length; Students++) {
    console.log(newStudents[Students]);
}

//TRANSVERSING THROUGH THE PHACULTY ARRAY USING FOR LOOP
for (let i = 0; i < Phaculty.length; i++) {
    console.log(Phaculty[i]);
}


// CONCATENATING A STRING OF ARRAY USING THE JOIN METHOD
let studentNames = ["Nweke", "Chukwunonso", "Christopher."];
let newNames = studentNames.join(" ");
console.log(newNames); 


// MY REG NUMBER
let Reg = [];
let RegNumber = [2021513005];
console.log(RegNumber);
