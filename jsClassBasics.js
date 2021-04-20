// refresher on creating js classes and giving properties 

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year; // notice that we can name the property whatever we'd like
    }
}

// above is just a blueprint of the student class 

// we need to instatiate in order to create new students below - 

let firstStudent = new Student("Melissa", "Mach")
let secondStudent = new Student("Jo", "Malone")

// now that students are created, we can call on their properties which helps to organize our code