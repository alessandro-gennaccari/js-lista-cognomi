/* Lista Cognomi
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
Scrivi anche la posizione "umana" 
(quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova */


// Dichiarazione array con valori predefiniti;
var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// Aquisizione valore da prompt;
// NOTA, HO TOLTO LA CASELLA DI INPUT PERCHè MI STAVA DANDO PROBLEMI E NON PRENDEVA SEMPRE IL COGNOME;
var surnameUser = prompt('Inserisci il tuo cognome');

// Converto il cognome con la prima lettera maiuscola ed il resto minuscolo,
//  per evitare problemi nell'orbine alfabetico;
var surnameUser = surnameUser.charAt(0).toUpperCase() + surnameUser.substring(1).toLowerCase();

// Push valore da casella di input all'interno dell'array ed sistemo tutto in ordine alfabetico;
surnameList.push(surnameUser);
surnameList.sort()

// button che fa vedere la lista dei cognomi, con un while che si fermera quando finira la lista;
var stamp = document.getElementById('print');
stamp.addEventListener('click', function() {

    var i = 0;
    while (i < surnameList.length) {
        document.getElementById('list').innerHTML = surnameList.join(', ');
        i++;
    }

    // Stampo la posizione umana in cui si trova l'utente;
    var userPosition = surnameList.indexOf(surnameUser) +1;
    document.getElementById('position').innerHTML = 'Sei in posizione numero: ' + userPosition;

});