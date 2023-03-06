function output() {
    var fam = document.getElementById('fam');
    var imy = document.getElementById('imy');
    var otc = document.getElementById('otc');
    var bor = document.getElementById('bor');
    var pls = document.getElementById('pls');
    var fav = document.getElementById('fav');
    var unfav = document.getElementById('unfav');


    temp_fam = fam.value;
    temp_imy = imy.value;
    temp_otc = otc.value;
    temp_bor = bor.value;
    temp_pls = pls.value;
    temp_fav = fav.value;
    temp_unfav = unfav.value;

    var win = window.open("", "", "width=450px,height=500px");
    win.document.open();

    var str = "<h2>О себе</h2><hr>";
    win.document.write(str);

    str = "Я, " + temp_fam + " " + temp_imy + " " + temp_otc + " родился в городе " + temp_pls + ".<br><br>";
    win.document.write(str);

    str = "Больше всего я люблю " + temp_fav + " и очень не люблю " + temp_unfav + ". Было бы замечательно,"
        + " всю жизнь только " + temp_fav + ", но к сожалению приходится иногда и " + temp_unfav + ".<br><br>";
    win.document.write(str);

    str = '<input type="button" value="Закрыть" onclick="window.close();">';
    win.document.write(str);

    win.document.close();

}