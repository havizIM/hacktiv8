const animals= [
    { name: "Fluffy", species: "cat" },
    { name: "Carlo", species: "dog" },
    { name: "Dory", species: "fish" },
    { name: "Hamilton", species: "dog" },
    { name: "Nemo", species: "fish" },
    { name: "Ursa", species: "cat" }
];

/* ------- FILTER --------- */
/* Melooping data dengan kondisi tertentu, yang dihasilkan adalah berbentuk array atau object beserta key */
let fish = animals.filter((animal) => animal.species === 'fish');
let findCarlo = animals.filter((animal) => animal.name === 'Carlo' && animal.species === 'fish' );

// console.log(fish);
// console.log(findCarlo);

/* -------- MAP ---------- */
/* Melooping data untuk mendapatkan value, dan hasil yang diberikan adalah berupa value dari array atau object */
let names = animals.map((animal) => animal.name );
let description = animals.map((animal) => {
    return `${animal.name} is a ${animal.species}`;
});

// console.log(names);
// console.log(description);

/* ------- REDUCE -------- */
/* Melooping data untuk mendapatkan summary, average ataupun operasi matematis lainnya seperti excell */
/* Reduce memiliki dua parameter, pertama untuk insial yang kedua untuk value array. Ditambahkan inisialisasi dibalakang function body */
let orders = [
    { total: 200000 },
    { total: 300000 },
    { total: 10000 },
    { total: 150000 },
    { total: 15000 }
];

let total = orders.reduce((total, order) => total + order.total, 0);
// console.log(total);

let animalsName = animals.reduce((init, animal) => {
    return init +' '+ animal.name;
}, 'Hewan peliharaan saya adalah');

console.log(animalsName);
