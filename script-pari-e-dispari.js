/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
*/
/*
1. Recupera gli elementi del DOM in cui devono uscire i risultati.
2. Crea diverse funzioni che regolano il gioco (stabilire se un numero è pari, generare il numero per il computer, gestire la scelta dell'utente)
3. Raccogli dei dati inseriti dall'utente
4. Stabilisci se la somma dei numeri dell'utente e del computer sia pari o dispari
5. Stampa tutti i risultati nel DOM.





*/

// Funzione che stabilisce se un numero è pari
function isEven(number) {
    return number % 2 === 0;
}

// Funzione che genera per il computer un numero da 1 a 5
function computerNumber() {
    return Math.floor(Math.random() * 5) + 1;

}
// Funzione che gestisce la scelta pari o dispari
function evenOddChoice() {
    let userEvenOdd = prompt("Scegli tra pari e dispari").toLowerCase().trim();
    
    if (userEvenOdd !== "pari" && userEvenOdd !== "dispari") {
        document.getElementById('winner').innerHTML = "Scrivi pari o dispari.";
        return null;
    }
    
    return userEvenOdd;
}

// Funzione che gestisce la scelta del numero da 1 a 5
function numberChoice() {
    let userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
    if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
        document.getElementById('winner').innerHTML = "Il numero scelto deve essere compreso tra 1 e 5.";
        return null;
    }
    
    return userNumber;
}

// Funzione principale che avvia il gioco
function startGame() {
    // Raccolgo gli elementi dal DOM
    const userNum = document.getElementById('usernum');
    const cpuNum = document.getElementById('cpunum');
    const theWinner = document.getElementById('winner');
    const sumResult = document.getElementById('sumresult')

    // Avvio del gioco
    let userEvenOdd = evenOddChoice();
    if (!userEvenOdd) return;  // Variabile che ferma il gioco se la scelta è invalida

    let userNumber = numberChoice();
    if (userNumber === null) return;  // Variabile che ferma il gioco se la scelta è invalida

    let cpuNumber = computerNumber();

    // Stampa dei numeri in pagina
    cpuNum.innerHTML = `Il numero del computer è: ${cpuNumber}`;
    userNum.innerHTML = `Il tuo numero è: ${userNumber}`;

   // Calcolo della somma e verifica se è pari o dispari
   let sum = userNumber + cpuNumber;
   let sumIsEven = isEven(sum);
   let sumResultText = sumIsEven ? "pari" : "dispari";

   // Stampa il risultato della somma
   sumResult.innerHTML = `La somma dei numeri è ${sumResultText}.`;

   // Verifica e mostra il risultato del gioco
   if ((sumIsEven && userEvenOdd === "pari") || (!sumIsEven && userEvenOdd === "dispari")) {
       theWinner.innerHTML = "Hai vinto!";
   } else {
       theWinner.innerHTML = "Hai perso!";
   }
}

// Avvio del gioco
startGame();


