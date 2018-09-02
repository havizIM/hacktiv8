// class Person {
//     constructor(name, age, height) {
//         this._name = name
//     }
//     getName() {
//         return this._name
//     }
//     getAge() {
//         return this._age
//     }
// }

// class OrangNyebelin extends Person {

// }

// let Haviz = new Person('Haviz', 20, 170);
// let Fath = new Person('Fath', 20, 160);
// let Shab = new OrangNyebelin('Shab');

// console.log(Shab.getName());

class Animal {
    constructor(props) {
        this._vertebrae = props.vertebrae;
        this._feet = props.feet;
        this._fur = props.fur;
        this.props = props;
    }
    getFur() {
        return this._fur;
    }
}

class Bird extends Animal {
    constructor(props) {
        super(props);
        this._fur = true;
        this._feet = 2;
        this._sound = props.sound;
    }
    getSound() {
        return this._sound;
    }
}

let Perkutut = new Bird({
    feet: 2,
    fur: true,
    sound: 'Chirp'
});
console.log(Perkutut.getSound());
// let Chip = new Bird();
// let Moo = new Moo(true);

// console.log(Chip.getChip());
// console.log(Moo.getMoo());