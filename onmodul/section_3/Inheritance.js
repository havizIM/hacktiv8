class Person {
    constructor(name){
        this._name = name;
    }
    getName() {
        return this._name;
    }
}
 
class Employee extends Person {
    constructor(name, title){
        super(name);
        this._title = title;
    }
    doWork() {
        return this._name + ' is working!';
    }
    haveTitle() {
        return this._name + ' is have a title ' + this._title;
    }
}

let haviz = new Employee('Haviz', 'S.Kom');
console.log(haviz.getName());
console.log(haviz.doWork()); 
console.log(haviz.haveTitle());  