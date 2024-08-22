/* Crea una funzione che fa scegliere a un utente pari o dispari e poi un numero da 1 a 5 e stabilisci il vincitore

TODO LIST
1. Recupera gli elementi dal DOM.
2. Crea una funzione che genera un numero casuale da 1 a 5 per il computer.
3. Somma i due numeri.
4. Stabilire con una funzione se il risultato è pari o dispari.
5. Stampa il vincitore in pagina.
*/
//Funzione che stabilisce se un numero è pari
function isEven(num) {
    return num % 2 === 0;
}

//Funzione che genera un numero da 1 a 5
function computerNumber (){
    return Math.floor(Math.random() * 5) + 1;
}





//Raccolgo gli elementi dal DOM
const userNum = document.getElementById('usernum')
const cpuNum = document.getElementById('cpunum')
const theWinner = document.getElementById('winner')

