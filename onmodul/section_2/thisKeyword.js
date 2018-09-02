let counter = {
    count: 0,
    increment: function () {
        return this.count += 10;
    },
    decrement: function () {
        return this.count -= 4;
    }
}

console.log(counter.count);
console.log(counter.increment());
console.log(counter.decrement());

/*------------------------------------------------------------------ */

let name = {
    firstname: 'Haviz',
    lastname: 'Indra Maulana',
    fullname: function() {
        return `${this.firstname} ${this.lastname}`;
    }
}

console.log(name.fullname());

/*------------------------------------------------------------------ */

// this akan merepresentasikan parent atau satu kesatuan dari sebuah object atau function
