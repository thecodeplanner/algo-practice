// refresher on creating js classes and giving properties 

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year; // notice that we can name the property whatever we'd like
    }
    fullName() {
        return  `Your full name is ${this.firstName} ${this.lastName}.` //this allows us to create instance methods
    }
}

// this refers to the instance of the class**

// above is just a blueprint of the student class 
// we need to instatiate in order to create new students below - 
let firstStudent = new Student("Melissa", "Mach", 5)
let secondStudent = new Student("Jo", "Malone", 2)

// now that students are created, we can call on their properties which helps to organize our code 
// we are also able to call on the instance method -- make sure to invoke the function otherwise we will just receive the function definiteion

firstStudent.fullName() // Your full name is Melissa Mach.