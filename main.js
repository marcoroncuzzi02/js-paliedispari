/*
Esercizio di oggi: nome repo: js-paliedispari
Palidroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). 
Dichiariamo chi ha vinto.

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
*/

//es 1
let parolaInserita = prompt("inserisci una parola").toLowerCase()
console.log(parolaInserita)
let parolaInversa=""

function palindroma(){
    for (let i = parolaInserita.length - 1; i>=0; i-- ){
        parolaInversa += parolaInserita.charAt(i)
    }
}

palindroma()
console.log(parolaInversa)

if (parolaInserita == parolaInversa) {
    console.log("la parola è palindroma")
}
else{
    console.log("non è palindroma")
}
//es2

// let sceltaUtente = prompt("scegli pari o dispari")
// let numeroUtente = prompt("scegli un numero da 1 a 5")

// let numeroComputer = createRandomNumber(1,6);
// myLog('Ciao Sono Marco'); //FUNZIONE SENZA RETURN
// console.log(myOtherLog('Ciao Sono Marco'));  //FUNZIONE CON RETURN

// function createRandomNumber(min,max){
//     return Math.floor((Math.random() * max) + min); 
//     console.log('non lo fa questo');
// }

// function myLog(text){
//     console.log(text);
// }

// function myOtherLog(text){
//     return text;
// }