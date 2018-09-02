/* High Order Function adalah metode yang digunakan untuk memecah kode menjadi part-part kecil, sehingga 
   memungkinkan untuk melakukan reusable untuk function tertentu, Contoh: */

// setInterval(() => {
//     console.log("Thick");
// }, 1000);

/* Biar lebih jelas, maka diubah menjadi seperti ini :/ */

const printThick = () => {
    console.log('Thick');
}

setInterval(printThick, 1000);