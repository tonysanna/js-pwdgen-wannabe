var nome;
nome = prompt('Come ti chiami?');


var cognome;
cognome = prompt('Qual è il tuo cognome?');

var colore;
colore = prompt('Qual è il tuo colore preferito?');

document.getElementById('password').innerHTML = "La tua password inviolabile è " + nome + cognome + colore + "21";
