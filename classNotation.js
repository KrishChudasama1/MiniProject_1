
// Represents a single assignment with a title and due date.
// Each Assignment object can print its own details using the
// printAssignment() method below.
class Assignment {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }

    // Prints one assignment in the same formatted style
    // as the plainObjects.js version.
    printAssignment() {
        console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate);
    }
}




// Represents an academic course with a name, instructor,
// number of credit hours, and a list of Assignment objects.
// The courseInfo() method prints all course details along with
// each assignment belonging to the course.
class Course {
    constructor(courseName, instructor, creditHours, assignments) {
        this.courseName = courseName;
        this.instructor = instructor;
        this.creditHours = creditHours;
        this.assignments = assignments || []; // default to empty list
    }

    // Prints the course information followed by all assignments.
    // Loops through the assignments array and calls each one's
    // printAssignment() method.
    courseInfo() {
        console.log(
            'Course: ' + this.courseName +
            ' | Instructor: ' + this.instructor +
            ' | Credit Hours: ' + this.creditHours
        );
        console.log('Assignments >>>');
        for (let a of this.assignments) {
            a.printAssignment();
        }
    }
}

//Creating Assignments 
let a1 = new Assignment('Project Proposal', 'Jan 15');
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

//Create courses
let c1 = new Course('Software Engineering', 'Dr. Pepper', 3, [a1, a2]);
let c2 = new Course('Data Science', 'Dr. Evil', 6, [a3, a4]);


//Output 
c1.courseInfo();
c2.courseInfo();
