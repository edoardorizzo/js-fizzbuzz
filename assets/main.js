//Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
for (let i = 1; i <= 100; i++){

    // per i multipli di 3 stampi “Fizz” al posto del numero
    if (i % 3 == 0){
        console.log(i, 'Fizz');

    //per i multipli di 5 stampi “Buzz”    
    } else if (i % 5 == 0){
        console.log(i, 'Buzz');

    //per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.    
    } if (i % 3 == 0 && i % 5 == 0){
        console.log(i, "FizzBuzz");
    }

    /*
    BONUS 1:
    Crea un container nel DOM , aggiungendo un elemento html con il numero o la     stringa corretta da mostrare.
    Potete usare vari strumenti per farlo:
    `append()` oppure
    `.innerHTML`
    `.insertAdjacentHTML()`
    */
    let contElm = document.querySelector('.cont');
    contElm.innerHTML += (`<li>${i}</li>`);
}




