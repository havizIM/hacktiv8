let a = () => {
    setTimeout(() => {
        console.log('a');
    }, 1000)
}

a();
console.log('b');