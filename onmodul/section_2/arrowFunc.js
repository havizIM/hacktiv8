// Regular function
function addOld(a, b) {
    return a + b;
}

console.log(addOld(4,5));

/* ----------------------------------------------------------------------- */

// Arrow Function - Untuk return syntax function yang komplek atau rumit
const addNew = (a, b) => {
    return a + b;
}

console.log(addNew(6,89));


// Arrow Function - Untuk return syntax function yang lebih sederhana / 1 line
const addShort = (a, b) => a + b;

console.log(addShort(3,5));
