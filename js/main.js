'use strict'

const kmNumber = document.getElementById('kmnumber');
const age = document.getElementById('userage');

const kmPrice = 0.21;
const userUnder = 18;
const userOver = 65;
const discount20 = 20;
const discount40 = 40;

calculator.addEventListener('submit', function (event) {
    event.preventDefault();

    const kmNumberInput = Number(kmNumber.value);
    const ageInput = Number(age.value);
    console.log(kmNumberInput);
    console.log(ageInput);

    let price = kmNumberInput * kmPrice;
    console.log((price).toFixed(2));

    if (ageInput < userUnder) {
        console.log('il cliente ha diritto ad uno sconto del 20%');
        price -= (price * discount20) / 100;
    } else if (ageInput > userOver) {
        console.log('il cliente ha diritto ad uno sconto del 40%');
        price -= (price * discount40) / 100;
    } else {
        console.log('paga prezzo pieno');
    };

    console.log((price).toFixed(2));

    document.getElementById('result').innerText = price.toFixed(2);
    document.getElementById('result-km').innerText = kmNumber.value;
    document.getElementById('result-age').innerText = age.value;
    document.getElementById('result-container').classList.remove('d-none');
})




