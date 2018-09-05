import Shape from './Shape';

class Circle extends Shape {
    constructor({ id, x, y, radius}){
        super({ id, x, y });
        this._radius = radius;
    } 
}

let circle = new Circle({id: 1, x: 2, y: 0, radius: 10 });
console.log(circle.getX());