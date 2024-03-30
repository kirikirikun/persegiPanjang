document.getElementById('keliling').addEventListener('click', function(){
    let inputLebar = Number(document.getElementById('lebar').value);
    let inputPanjang = Number(document.getElementById('panjang').value);
    let rumus = 2 * (inputPanjang + inputLebar);
    document.getElementById('hasilRumus').innerText = rumus;
})

document.getElementById('luas').addEventListener('click', function(){
    let inputLebar = document.getElementById('lebar').value;
    let inputPanjang = document.getElementById('panjang').value;
    let rumus = Number(inputPanjang * inputLebar);
    document.getElementById('hasilRumus').innerText = rumus;
})