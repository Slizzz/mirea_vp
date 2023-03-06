x = 0
y = 0
shag = 0
r1 = document.getElementById('i1')
r2 = document.getElementById('i2')
x1 = r1.width
y1 = r1.height
x2 = r2.width
y2 = r2.height
f();
function f() {
    switch (shag) {
        case 0:
            x = x + 5;
            r2.style.left = x
            if (x < x1 - x2 - 10) { setTimeout("f()", 1); } else { shag = shag + 1; f() }
            break;
        case 1:
            y = y + 5;
            r2.style.top = y
            if (y < (y1 - y2) / 2) { setTimeout("f()", 1); } else { shag = shag + 1; f() }
            break;
        case 2:
            x = x - 5;
            r2.style.left = x
            if (x > 0) { setTimeout("f()", 1); } else { shag = shag + 1; f() }
            break;
        case 3:
            y = y + 5;
            r2.style.top = y
            if (y < (y1 - y2 - 10)) { setTimeout("f()", 1); } else { shag = shag + 1; f() }
            break;
        case 4:
            x = x + 5;
            r2.style.left = x
            if (x < x1 - x2 - 10) { setTimeout("f()", 1); } else { shag = shag + 1; f() }
            break;
        default:
            break;
    }
}

