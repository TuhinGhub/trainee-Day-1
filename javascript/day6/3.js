//Write a program to iterate over object.

class Person{
constructor(name,age,gender,interest){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.interest=interest;
}
greeting()
{
    return "hello "+this.name;

}

farewell()
{
    return "Goodbye "+this.name;
}
}
let person1=new Person("John",25,"Male","Sports");
console.log(person1.greeting());
console.log(person1.farewell());