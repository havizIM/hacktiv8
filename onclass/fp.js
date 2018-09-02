// FILTER
// Mengambil suatu dari object secara menyeluruh termasuk dengan key dari object
const animals =[
    {name: "Fluppy", species: "cat"},
    {name: "Carlo", species: "dog"},
    {name: "Nemo", species: "fish"},
    {name: "Dory", species: "fish"},
    {name: "Ursa", species: "cat"},
    {name: "Hamilton", species: "dog"}
];

let other = animals.filter(animal => {
    return animal.name === 'Hamilton';
});
// console.log({ other });

// MAP
// Mengambil suatu hanya nilai dari object tersebut
let names = animals.map(animal => {
    return `Ini adalah nama peliharaan saya adalah ${animal.name}`;
})
// console.log(names);

// REDUCE
// Mengolah data menjadi summary data
let orders = [
    {total: 325},
    {total: 512},
    {total: 128}
];

let sum = orders.reduce((total, order) => {
    return total + order.total;
}, 0);


let pets = animals.reduce((description, pet) => {
    return description+' '+pet.name;
}, "Nama peliharaan saya adalah");

console.log(pets);

