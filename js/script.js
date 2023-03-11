/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. 
*/

//Creare un ciclo for per creare i numeri da 1 a 100

const container = document.querySelector('.container');

for(i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
        container.innerHTML += `
            <div class="square square-green text-white d-flex justify-content-center align-items-center">FizzBuzz</div>
        `
    } else if(i % 3 === 0) {
        console.log('Fizz');
        container.innerHTML += `
            <div class="square text-white square-red d-flex justify-content-center align-items-center">Fizz</div>
        `
    } else if(i % 5 === 0) {
        console.log('Buzz');
        container.innerHTML += `
            <div class="square text-white square-orange d-flex justify-content-center align-items-center">Buzz</div>
        `
    } else {
        console.log(i);
        container.innerHTML += `
            <div class="square text-white d-flex justify-content-center align-items-center">${i}</div>
        `
    }
};