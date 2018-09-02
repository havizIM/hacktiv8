class Person {
    constructor(name){
        this._name = name;
    }
    getName() {
        return `Dia adalah ${this._name}`;
    }
}

export default Person;

