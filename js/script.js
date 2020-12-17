/* Lista Cognomi
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
Scrivi anche la posizione "umana" 
(quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova */


// Dichiarazione array con valori predefiniti;
var surnameList = ['Bianchi', 'Rossi', 'Duzion', 'Balsano', 'Verdi'];
// Aquisizione valore da casella di input;
var surnameUser = document.getElementById('surname').value;
console.log(surnameList);
// Converto il cognome con la prima lettera maiuscola ed il resto minuscolo,
//  per evitare problemi nell'orbine alfabetico;
var surnameUserFirstLetter = surnameUser.charAt(0).toUpperCase();
var surnameUserOtherLetter = surnameUser.substring(1).toLowerCase();
var surnameUserConverted = surnameUserFirstLetter + surnameUserOtherLetter;
console.log(surnameUserConverted);

// Push valore da casella di input all'interno dell'array;
surnameList.push(surnameUserConverted);
console.log(surnameList);

// Stampo la lista ordinata in ordine alfabetico




