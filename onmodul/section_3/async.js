const proms = (count) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            count === 100 ? reject('Error Bray') : resolve(count+1);

            // if(count === 100) {
            //     reject('Error brayyy...');
            // } else {
            //     resolve(count+1);
            // } 
            
        }, 1000);   
    })
}

let countTambah = () => {   
    proms(10)
    .then((result) => {
        return proms(result);
    })
    .then((result1) => {
        console.log(result1);
    })
    .catch((error) => {
        console.log(error);
    });
    console.log('mulai');
}

countTambah();