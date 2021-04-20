// refresher on creating js classes and giving properties 

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year; // notice that we can name the property whatever we'd like
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return  `Your full name is ${this.firstName} ${this.lastName}.` //this allows us to create instance methods
    }
    markLate() {
        this.tardies += 1;
        if(this.tardies >= 3) {
            return 'You are suspended!'
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times(s).`
    }
    addScore(score) { //we can also pass in an argument with an instance method 
        this.scores.push(score); //there is nothing stopping us from pushing right to score property, but this is better convention
        return this.scores
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a,b) {return a+b})
        return sum/this.scores.length
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