/* Lista Cognomi
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
Scrivi anche la posizione "umana" 
(quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova */

// button che fa vedere la lista dei cognomi;
var stamp = document.getElementById('print');
stamp.addEventListener('click', function() {

    // Dichiarazione array con valori predefiniti;
    var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

    // Aquisizione valore da prompt;
    var surnameUser = document.getElementById('surname').value;

    // Converto il cognome con la prima lettera maiuscola ed il resto minuscolo,
    //  per evitare problemi nell'orbine alfabetico;
    var surnameUser = surnameUser.charAt(0).toUpperCase() + surnameUser.substring(1).toLowerCase();

    // Push valore da casella di input all'interno dell'array ed sistemo tutto in ordine alfabetico;
    surnameList.push(surnameUser);
    surnameList.sort()

    // while che si fermera quando finira la lista;
    var i = 0;
    while (i < surnameList.length) {
        document.getElementById('list').innerHTML = surnameList.join(', ');
        i++;
    }

    // Stampo la posizione umana in cui si trova l'utente;
    var userPosition = surnameList.indexOf(surnameUser) +1;
    document.getElementById('position').innerHTML = 'Sei in posizione numero: ' + userPosition;

});