const bene = document.getElementById('bene');
const bg = document.querySelector('bg>img');
var movimento = 230;
var comecar = 0;

function animacaoBene(key) {
    if (key == 1) {
        document.querySelector(".animacao2").style.display = "none";
    } else {
        document.querySelector(".animacao1").style.display = "none";
    }
    document.querySelector('.animacao' + key).style.display = "block";
}

function animarBG(key) {
    if (key == true) {
        document.querySelector(".bg-anim").style.animation = 'scroll-bg 3s linear infinite';
    } else {
        document.querySelector(".bg-anim").style.animation = "none";
    }
}

function mostrarTextos(key) {
    if (key == true) {
        document.querySelector("#aperteEspaco").style.display = "none";
        document.querySelector("#recomecar").style.display = "block";
    } else {
        document.querySelector("#recomecar").style.display = "none";
        document.querySelector("#aperteEspaco").style.display = "block";
    }
}

window.addEventListener('keyup', function teclasMov(key) {
    let tecla = key.which || key.keyCode || 0;

    switch (tecla) {
        /* Seta para cima */
        case 38:
            if (movimento > 180) {
                movimento = movimento - 50;
                bene.style.top = movimento + "px";
            }
            break;

        /* Seta para baixo */
        case 40:
            if (movimento < 280) {
                movimento = movimento + 50;
                bene.style.top = movimento + "px";
            }
            break;

        /* Espaço */
        case 32:
            if (comecar == 0) {
                mostrarTextos(true);
                animacaoBene("2");
                animarBG(true);
                comecar++;
            } else {
                bene.style.animation = "pulo 500ms ease";
                this.setTimeout(function () {
                    bene.style.animation = "none";
                }, 510);
            }
            break;

        /* Enter */
        case 13:
            mostrarTextos(false);
            animacaoBene("1");
            animarBG(false);
            comecar--;
            bene.style.top = "230px";
            break;
    }
});