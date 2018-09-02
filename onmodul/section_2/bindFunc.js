// Apabila terdapat function di dalam function, maka this tidak akan terbaca

// function Person () {
//     this.age = 0;
    
//     setInterval(function(){
//         this.age++; 
//         console.log(this.age);
//     }, 1000);
// }


// Penyelesaiannya adalah dengan menggunakan bind()

// function Person () {
//     this.age = 0;

//     setInterval(function(){
//         this.age++;
//         console.log(this.age);
//     }.bind(this), 1000)
// }


/* Apabila menggunakan Arrow Function, maka this di dalam arrow tidak perlu memahami arti this lagi.
   Arrow akan mengambil this terakhir yang dijalankan sebelum masuk ke arrow function
   dan tidak memerlukan method bind. Dalam hal ini kita tidak memerlukan constructor */

function Person () {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000)
}

const p = new Person;