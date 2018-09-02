class Employee extends Person {
    constructor(name, title){
        super(name);
        this._title = title;
    }
    doWork() {
        return `${this._name} is working`;
    }
    haveTitle() {
        return `Haviz is ${this._title}`;
    }
}

export default Employee;