/*Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email*/

// Lista degli invitati
const invitati = ["mario.rossi@gmail.com", "luigi.verdi@gmail.com", "anna.bianchi@gmail.com", "giulia.neri@gmail.com"];

// Chiedi all'utente la sua email
const emailUtente = prompt( "Inserisci la tua email per verificare l'accesso alla festa:" );

// Variabile di controllo per verificare se l'email è nella lista
let emailTrovata = false;

// Ciclo for per controllare la presenza dell'email nella lista
for (let i = 0; i < invitati.length; i++) {
  if (invitati[i] === emailUtente) {
    emailTrovata = true;
  }
}

// Stampa del messaggio appropriato
if (emailTrovata) {
  console.log("Benvenuto alla festa! La tua email è presente nella lista degli invitati.");
} else {
  console.log("Spiacente, la tua email non è presente nella lista degli invitati.");
}




/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/