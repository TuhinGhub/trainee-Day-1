//3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
//3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
//3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Person {
    constructor(name, age, gender, interests) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    greeting() {
      return `Hello, I'm ${this.name} and I'm interested in ${this.interests.join(", ")}.`;
    }
  
    farewell() {
      return `Goodbye ${this.name}. Have a great day!`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, gender, interests, studies) {
      super(name, age, gender, interests);
      this.studies = studies;
    }
  
    greeting() {
      return "Hi there, I'm "+this.name+" and I'm studying "+this.studies+"."+"My interests are "+this.interests.join(", ");
    }
  }
  
  class Teacher extends Person {
    constructor(name, age, gender, interests, subjectsTaught) {
      super(name, age, gender, interests);
      this.subjectsTaught = subjectsTaught;
    }
  
    farewell() {
      return "Goodbye "+this.name+"."+"I hope you have a great day teaching "+this.subjectsTaught.join(", ");
    }
  }
  
  const student1 = new Student("John", 25, "Male", ["Sports"], "Computer Science");
  console.log(student1.greeting());
  
  const teacher1 = new Teacher("Jane", 40, "Female", ["Reading", "Cooking"], ["Math", "Science"]);
  console.log(teacher1.farewell());