function plosh1() {
    var pole1 = document.getElementById('pole1');
    var pole2 = document.getElementById('pole2');
    pole1_int = parseInt(pole1.value);
    pole2_int = parseInt(pole2.value);
    if (isNaN(pole1_int) || isNaN(pole2_int)) {
        alert('Некорректный ввод')
    } else {
        ploshad = pole1_int * pole2_int;
        alert('Площадь равна: ' + ploshad);
    }
}