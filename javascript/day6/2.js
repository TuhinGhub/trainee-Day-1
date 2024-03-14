// Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.



class Shape {
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    getArea(){}
}
class Rectangle extends Shape{
        getArea() {
            return this.width * this.height;
        }
    }

    class Triangle  extends Shape {
    getArea() {
        return 0.5*this.width*this.height;
    }
}
       const rect= new Rectangle(4,2);
       console.log(rect.getArea());

       const tri = new Triangle(5,10);
       console.log(tri.getArea());