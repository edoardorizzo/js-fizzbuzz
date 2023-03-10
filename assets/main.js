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
}
    










/*
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo usato un operatore  nei giorni scorsi che possiamo riusare in questi esercizio?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano o inglese per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
3. Facciamo attenzione all'ordine delle condizioni che usiamo */

