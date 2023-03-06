var x = 10, y = 10, color;

document.write("<table>");
for (let i = 0; i < y; i++) {
    document.write("<tr>");
    for (let j = 0; j < x; j++) {
        if ((i + j) < 8) {
            color = "bgcolor=0805f4";
        }
        else {
            color = "bgcolor=3cd210";
        };
        document.write("<td height='30' width='30' " + color + "> </td>");
    }
    document.write("</tr>");
}
document.write("</table> <br>");

document.write("<table border='3px' bordercolor='grey' cellspacing='3px' cellpadding='3px'>");
for (let i = 0; i < y; i++) {
    document.write("<tr>");
    for (let j = 0; j < x; j++) {
        if ((i + j)%4 == 2) {
            color = "bgcolor=e80ece";
        }
        else {
            color = "bgcolor=00ff08";
        };
        document.write("<td " + color + "> </td>");
    }
    document.write("</tr>");
}
document.write("</table>");