var x = 4, y = 1, z = 9;
if (x == y && y == z) {
    document.write("Данные числа равны между собой. <br> x = y = z = " + x);
} else {
    if (x > y && x > z) {
        document.write("Наибольшее число x. <br> x = " + x)
    }
    if (y > x && y > z) {
        document.write("Наибольшее число y. <br> y = " + y);
    }
    if (z > x && z > y) {
        document.write("Наибольшее число y. <br> z = " + z);
    }
    if (x == y && x > z) {
        document.write("Наибольшие числа x и y. <br> x = y = " + x);
    }
    if (x == z && x > y) {
        document.write("Наибольшие числа x и z. <br> x = z = " + x);
    }
    if (y == z && y > x) {
        document.write("Наибольшие числа y и z. <br> y = z = " + y);
    }
}