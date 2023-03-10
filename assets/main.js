/*
Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

BONUS 1:
Crea un container nel DOM , aggiungendo un elemento html con il numero o la     stringa corretta da mostrare.
Potete usare vari strumenti per farlo:
`append()` oppure
`.innerHTML`
`.insertAdjacentHTML()`
*/

let contElm = document.querySelector('.cont');
let div = document.querySelector('div');

for (let i = 1; i <= 100; i++){

    if (i % 3 == 0 && i % 5 == 0){
        console.log(i, 'FizzBuzz');
        contElm.innerHTML += (`<div>FizzBuzz</div>`);

    } else if (i % 3 == 0){ 
        console.log(i, 'Fizz');
        contElm.innerHTML += (`<span>Fizz</span>`);

    } else if (i % 5 == 0){
        console.log(i, 'Buzz');
        contElm.innerHTML += (`<article>Buzz</article>`);

    } else {
        console.log(i);
        contElm.innerHTML += (`<nav>${i}</nav>`);
    }
}

/*
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

----- VEDI CSS ----
*/