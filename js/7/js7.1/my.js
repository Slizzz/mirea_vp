var temp_pole1 = document.getElementById('pole1');
var temp_pole2 = document.getElementById('pole2');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var umnoj = document.getElementById('umnoj');

function raschet() {
    console.log(plus);
    var x = true;
    pole1 = parseInt(temp_pole1.value)
    pole2 = parseInt(temp_pole2.value)

    if (isNaN(pole1) || isNaN(pole2)) {
        document.getElementById('ans').value = 'Неверные значения';
    } else {
        switch (x) {
            case plus.checked:
                document.getElementById('ans').value = pole1 + pole2;
                break;
            case minus.checked:
                document.getElementById('ans').value = pole1 - pole2;
                break;
            case umnoj.checked:
                document.getElementById('ans').value = pole1 * pole2;
                break;
            default: document.getElementById('ans').value = 'Не выбрано действие';
        }
    }
}
function reset() {
    var x = true;
    plus.checked = false;
    minus.checked = false;
    umnoj.checked = false;
    document.getElementById('pole1').value = '';
    document.getElementById('pole2').value = '';
    document.getElementById('ans').value = '';
}