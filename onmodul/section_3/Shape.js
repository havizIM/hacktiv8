
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

export default Shape;
