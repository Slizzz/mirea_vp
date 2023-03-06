function matr() {
    stroka = prompt('Введите размер матрицы:', '');
    document.write("<h3>Красивая единичная матрица:</h3>");
    document.write("<table>");
    for (let i = 0; i < parseInt(stroka); i++) {
        document.write("<tr>");
        for (let j = 0; j < parseInt(stroka); j++) {
            if (i == j) {
                number = "1";
            }
            else {
                number = "0";
            };
            document.write("<td height='5' width='15'> " + number + " </td>");
        }
        document.write("</tr>");
    }
}