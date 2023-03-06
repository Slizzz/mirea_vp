var imya, familiya, otchestvo, resultat;

familiya = prompt("Введите фамилию:", "");

imya = prompt("Введите имя:", "");

otchestvo = prompt("Введите отчество:", "");

resultat = confirm("Ваши ФИО:\n"+familiya+" "+imya+" "+otchestvo+"?")
if (resultat){
    alert("Здравствуйте, "+ familiya+" "+imya+" "+otchestvo);
} else {
    alert("Ошибка, обновите страницу...")
}