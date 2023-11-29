class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Akif', 24);

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    displayGrade(): void {
        console.log(`The grade of the student named ${this.name} is: ${this.grade}`);
    }
}

// Creating a student object
const student1 = new Student('Akif1', 24, 'A');
student1.introduce(); // Logs: Hello, my name is Akif and I am 24 years old.
student1.displayGrade(); // Logs