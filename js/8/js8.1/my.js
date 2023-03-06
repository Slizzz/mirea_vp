color = 1;
temp_table = document.getElementById('table1');
temp_button = document.getElementById('button1');

function change() {
    if (color == 1) {
        temp_table.style.background = 'blue';
        temp_button.innerText = "изменить фон на красный";
        color = 0;
    } else {
        temp_table.style.background = 'red';
        temp_button.innerText = "изменить фон на голубой";
        color = 1;
    }
}