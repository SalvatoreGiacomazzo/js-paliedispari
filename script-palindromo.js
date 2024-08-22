/* Crea una funzione che stabilisce se una parola inviata dall'utente è palindroma oppure no.

TO DO LIST
1. Recupera gli elementi dal DOM
2. Crea una funzione
3. Fai inserire la parola all'utente
4. Crea la funzione. (all'inizio del file JS)
5. Fai controllare la parola inviata dall'utente e controlla se è uguale alla sua versione specchiata
6. Stampa in pagina il risultato.
*/

//Creazione della funzione

function isPalindrome(word) {
return word === word.split('').reverse().join('');   //Split frammenta la parola in un array i caratteri, reverse inverte gli elementi dell'array e join li riunisce per ricreare una parola.

}
//Recupero l'elemento dal DOM in cui voglio che esca scritto il risultato
const palindromeText = document.getElementById('palindrome')

//Prompt per chiedere la parola all'utente
const userWord = prompt("Inserisci una parola:");

// Controllo della parola e stampa del risultato.
if (isPalindrome(userWord)) {
    palindromeText.innerHTML = `La parola '${userWord}' è palindroma.`;
} else {
   palindromeText.innerHTML = `La parola '${userWord}' non è palindroma.`;
}