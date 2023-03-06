var i = 1;

function changeImage() {
    const image = document.getElementById('image');
    switch (i) {
        case 0: image.src = '/images/granta.png'; break;
        case 1: image.src = '/images/largus.png'; break;
        case 2: image.src = '/images/niva.png'; break;
        case 3: image.src = '/images/vesta.png'; break;

    };
    i++;
    i %= 4;
};