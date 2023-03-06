var temp_pole1 = document.getElementById('pole1');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var umnoj = document.getElementById('umnoj');
var crug = document.getElementById('crug');
var cvadr = document.getElementById('cvadr');

function raschet() {

    var x = true;

    pole1 = parseInt(temp_pole1.value)

    if (isNaN(pole1)) {
        document.getElementById('ans').value = 'Неверное значение';
        alert("Неверное значение");
    } else {
        switch (x) {
            case crug.checked:
                document.getElementById('ans').value = Math.PI * Math.pow(pole1, 2);
                break;
            case cvadr.checked:
                document.getElementById('ans').value = Math.pow(pole1, 2);
                break;
            default: document.getElementById('ans').value = 'Не выбрана фигура';
                alert("Не выбрана фигура");
        }
    }
}

function reset() {
    crug.checked = false;
    cvadr.checked = false;
    document.getElementById('pole1').value = '';
    document.getElementById('ans').value = '';
}