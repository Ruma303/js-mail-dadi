/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

BONUS:
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"*/

const mailList = ['gigino@mail.it', 'pasqualino@mail.it', 'addolorata@mail.it', 'tortellino@mail.it'];
//const userMail = document.querySelector('#input-mail').value;
const userMail = prompt('Inserisci la tua mail. Suggerimenti: gigino@mail.it pasqualino@mail.it addolorata@mail.it tortellino@mail.it');


// Ciclo di verifica mail
for (let i = 0; i < mailList.length; i++){
    if (userMail == mailList[i] ){
        console.log('Ti abbiamo trovato! Sei ' + mailList[i])
    } else {
        console.log('La tua mail non esiste nei nostri big data server super fotonici');
    }
}

// Problema: mi ripete il console log anche del messaggio sbagliato e per ultimo mi da quello corretto.


// da creare eventi click, genera, print su html 