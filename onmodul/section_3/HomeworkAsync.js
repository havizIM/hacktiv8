const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (arrays) => {
    return new Promise((resolve, reject) => {
        resolve(
            arrays.map((array) => {
                return typeof array === 'string' ? array.toUpperCase() : array;
            })
        );
        reject('Error');
    })
}

const sortWords = (arrays) => {
    return arrays.sort((a, b) => {
        return a - b;
    });
}



makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch((error) => console.log(error));

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch((error) => console.log(error));

