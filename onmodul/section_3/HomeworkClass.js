class Shape { 
    constructor({ id, x, y }){
        this._id = id;
        this._x = x;
        this._y = y;
    }
    getX() {
        return this._x;
    }
    getY() {
        return this._y;
    }
    move({ x, y }){
        this._x = x;
        this._y = y;

        return `newX = ${this._x} and newY = ${this._y}`;
    }
}

class Rectangle extends Shape {
    constructor({ id, x, y, width, height }){
        super({id, x, y});
        this._width = width;
        this._height = height;
    }
    calcRectangle(){
        return `Luas persegi panjang adalah ${this._width * this._height}cm`;
    }
}

class Circle extends Shape {
    constructor({ id, x, y, radius}){
        super({ id, x, y });
        this._radius = radius;
    } 
}

class Eye extends Circle {
    constructor({id, x, y, radius, color}){
        super({id, x, y, radius});
        this._color = color;
    }
    roll(rollAmount){
        let x1 = rollAmount + this._x;
        let y1 = this._y;
       super.move({x: x1, y: y1});
    }
}


const rectangle = new Rectangle({id: 1, x: 30, y: 80, width: 20, height: 40});
console.log('newX from Rectangle: ', rectangle.getX());

const circle = new Circle({id: 2, x: 2, y: 10, radius: 20 });
console.log('newX from Circle: ', circle.getX());

const eye = new Eye({id: 2, x: 2, y: 10, radius: 20, color: 'blue' });
eye.roll(20);
console.log(eye.getX());

