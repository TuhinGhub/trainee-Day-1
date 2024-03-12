// Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    fullName() {
      return this.firstName+this.lastName;
    }
  
    static averageAge(people) {
      if (!Array.isArray(people)) {
        throw new TypeError("People must be an array");
      }
      if (people.length === 0) {
        return 0;
      }
      const totalAge = people.reduce((acc, person) => acc + person.age, 0);
      return totalAge / people.length;
    }
  }
  
  const people = [
    new Person("John", "Doe", 25),
    new Person("Jane", "Doe", 30),
    new Person("Jim", "Smith", 35),
  ];
  
  console.log(Person.averageAge(people)); 