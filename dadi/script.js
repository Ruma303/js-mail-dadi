const eleUserNumber = document.querySelector('#user-number');
const elePcNumber = document.querySelector('#pc-number');
const eleUserOutput = document.querySelector('#user-output');
const elePcOutput = document.querySelector('#pc-output');
const eleWinner = document.querySelector('#winner');



// Generazione numeri
const UserNumber = Math.floor(Math.random()* 6) + 1;
const PcNumber = Math.floor(Math.random()* 6) + 1;

console.log('Hai scelto il numero ' + UserNumber);
console.log('Il computer ha scelto il numero ' + PcNumber);

if (isNaN(UserNumber) == isNaN){
    console.log('Non hai scelto un numero, con te non ci gioco più :(');
} else if (UserNumber > PcNumber) {
    console.log('Hai vinto!');
} else if (UserNumber < PcNumber) {
    console.log('Il computer ha vinto!');
} else if (UserNumber === PcNumber) {
    console.log('Pareggio!');
}