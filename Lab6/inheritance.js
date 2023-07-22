/*
Exercise 1:
*/

String.prototype.filter = function (notStr) {
    return this.split(" ")
        .filter((x) => x != notStr)
        .join(" ");
};

console.log("This house is not nice!".filter("not"));

/*
Exercise 2:
*/

Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = 1; j < this.length - i; j++) {
            if (this[j - 1] > this[j]) {
                const temp = this[j];
                this[j] = this[j - 1];
                this[j - 1] = temp;
            }
        }
    }
    return this;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort());

/**
 * Exercise 3:
 */

function Person() {}
Person.prototype.initialize = function (name) {
    this.name = name;
};

function Teacher(name) {
    this.initialize(name);
}

Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject) {
    this.subject = subject;
};
Teacher.prototype.print = function () {
    console.log(this.name + " is now teaching " + this.subject);
};

var teacher = new Teacher("Sami Taha");
teacher.teach("WAP");
teacher.print();

// -------------------------------------------

function Teacher1(name, subject) {
    const person = { name: name };

    const teacher = Object.create(person, { subject: { value: subject } });

    console.log(teacher.name + " is now teaching " + teacher.subject);
}

Teacher1("Sami Taha", "WAP");

/**
 * Exercise 4:
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greeting = function () {
    console.log(
        `Greetings, my name is ${this.name} and I am ${this.age} years old.`
    );
};

Person.prototype.salute = function () {
    console.log(
        `Good morning!, and in case I dont see you, good afternoon, good evening and good night!`
    );
};

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}
Student.prototype = new Person();
Student.prototype.greeting = function () {
    console.log(
        "Hey, my name is " + this.name + " and I am studying " + this.major
    );
};

function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}
Professor.prototype = new Person();
Professor.greeting = function () {
    console.log(
        "Good day, my name is " +
            this.name +
            " and I am in the " +
            this.department +
            " department"
    );
};

var student = new Student("Tushar", "32", "CSE");
student.greeting();
student.salute();

var professor = new Professor("Sami Taha", "40", "ComPro");
professor.greeting();
professor.salute();
