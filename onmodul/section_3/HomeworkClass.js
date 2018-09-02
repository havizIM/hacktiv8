class Shape { 
    constructor(props){
        this._id = props.id;
        this._x = props.x;
        this._y = props.y;
    }
    getInfo(){
        return `There is an Shape with id : ${this._id}, x : ${this._x} and y : ${this._y}`;
    }
}

class Rectangle extends Shape {
    constructor(props){
        super(props);
        this._width = props.width;
        this._height = props.height;
    }
    calcRectangle(){
        return `Luas persegi panjang adalah ${this._width * this._height}cm`;
    }
}

class Round extends Shape {
    constructor(props){
        super(props);
        this._radius = props.radius;
    } 
}

const bidang = new Shape({id: 1, x: 20, y: 80});
const persegiPanjang = new Rectangle({id: 1, x: 20, y: 80, width: 8, height: 8});

console.log(persegiPanjang.getInfo());
console.log(persegiPanjang.calcRectangle());
