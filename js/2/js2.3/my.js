var stroka, chas, minuta;

stroka = prompt("Введите текущий час:", "");
chas = parseInt(stroka);
stroka = prompt("Введите текущую минуту:", "");
minuta = parseInt(stroka);

minuta += 1;
if (minuta >= 60) {
    chas += 1;
    minuta %= 60;
    if (chas > 23) {
        chas %= 24;
    }
}
// форматирование
if (minuta < 10) {
    minuta = "0" + minuta;
}
if (chas < 10) {
    chas = "0" + chas;
}
alert("Через минуту время будет равно: " + chas + ":" + minuta);