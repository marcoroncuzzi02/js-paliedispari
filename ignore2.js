// Ciao ragazzi,
// Esercizio di oggi:
// nome repo: js-mail-dadi

// Mail

// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota:
// Non è necessario provvedere alla validazione delle email

// mini task :
// - creare un prompt dove chiedo all'utente la mail
// - creare un array con una lista di email che possono accedere 
// - creare una condizione dove se la mail inserita è presente nell'array viene stampato un messaggio altrimenti ne viene stampato un altro 
// - utilizzare un ciclo for per realizzare la condizione

// const listaInvitati = [
//     'michealjordan',
//     'scottiepippen',
//     'dennisrodman',
//     'magicjhonson',
//     'lebronjames'
//  ]
// let mailInserita = prompt("inserisci la tua mail")

// if (listaInvitati.indexOf(mailInserita) !== -1) {
//     console.log(`${mailInserita} è presente negli invitati`);
//     } else {
//      console.log(`${mailInserita} non è presente`);
//     };

const listaInvitati = [
    'michealjordan',
    'scottiepippen',
    'dennisrodman',
    'magicjhonson',
    'lebronjames'
  ]

  let mailInserita = prompt("inserisci la tua mail")
  let mailTrovata = false

  for (i=0; i < listaInvitati.length; i++) {

    let mailCheck = listaInvitati[i]

    if (mailCheck == mailInserita){
        mailTrovata = true
    }
}

if (mailTrovata == true){
    console.log("sei tra gli invitati")
}
else if (mailTrovata == false){
    console.log("non sei tra gli invitati")
}

// Gioco dei dadi

let numeroGiocatore = Math.floor((Math.random() * 6) + 1);
let numeroComputer = Math.floor((Math.random() * 6) + 1);
console.log(numeroGiocatore)
console.log(numeroComputer)

if (numeroGiocatore < numeroComputer) {
    console.log(`${numeroComputer} è il vincitore`)
} 
else if (numeroComputer < numeroGiocatore) {
    console.log(`${numeroGiocatore} è il vincitore`)
} 
else{
    console.log(`i numeri sono uguali`)
}
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

