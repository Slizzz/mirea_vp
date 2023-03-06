var stroka = 1;

function opredelenie_chisla(stroka) {
    var temp = parseInt(stroka);
    if (temp == 1) {
        alert('Число ' + temp + ' не является ни простым, ни составным числом.');
    }
    else {
        var prostoe = true;
        for (let i = 2; i <= Math.sqrt(temp); i++) {
            if (temp % i == 0) {
                alert('Число ' + temp + ' не является простым.');
                prostoe = false;
                break;
            }
        }
        if (prostoe) {
            alert('Число ' + temp + ' является простым.');
        }
    }
}

function vvod() {
    stroka = prompt('Введите число:', '');
}