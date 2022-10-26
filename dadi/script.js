const eleUserNumber = document.querySelector('#user-number');
const elePcNumber = document.querySelector('#pc-number');
const eleUserOutput = document.querySelector('#user-output');
const elePcOutput = document.querySelector('#pc-output');
const eleWinner = document.querySelector('#winner');
const send = document.querySelector('#send')


// Generazione numeri
send.addEventListener('click', function(launch) {
launch.preventDefault();


const UserNumber = Math.floor(Math.random()* 6) + 1;
const PcNumber = Math.floor(Math.random()* 6) + 1;

console.log('Hai scelto il numero ' + UserNumber);
eleUserOutput.innerHTML = UserNumber;
console.log('Il computer ha scelto il numero ' + PcNumber);
elePcOutput.innerHTML = PcNumber;


if (UserNumber > PcNumber) {
    console.log('Hai vinto!');
    eleWinner.innerHTML = "Hai vinto!"
} else if (UserNumber < PcNumber) {
    console.log('Il computer ha vinto!');
    eleWinner.innerHTML = "Il computer ha vinto!"
} else if (UserNumber === PcNumber) {
    console.log('Pareggio!');
    eleWinner.innerHTML = "Pareggio! Clamoroso!"
}
})