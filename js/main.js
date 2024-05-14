'use strict'

calculator.addEventListener('submit', function (event) {
    event.preventDefault();

    const kmNumber = document.getElementById('kmnumber');
    const age = document.getElementById('userage');
    console.log(kmNumber.value);
    console.log(age.value);

    let molt = (kmNumber.value * parseFloat(0.21));
    let discount20 = (molt * 20) / 100;
    let discount40 = (molt * 40) / 100;

    if (age < 18) {
        console.log('il cliente ha diritto ad uno sconto del 20%');
        document.getElementById('result').innerHTML = (molt - discount20).toFixed(2);
    } else if (age > 65) {
        console.log('il cliente ha diritto ad uno sconto del 40%');
        document.getElementById('result').innerHTML = (molt - discount40).toFixed(2);
    } else {
        console.log('paga prezzo pieno');
        document.getElementById('result').innerHTML = (molt).toFixed(2);
    };

    console.log(molt);

    document.getElementById('result').innerHTML = molt;
    document.getElementById('result-km').innerHTML = kmNumber.value;
    document.getElementById('result-age').innerHTML = age.value;
    document.getElementById('result-container').classList.remove('d-none');
})




