const sound = document.getElementById('sound');
const logo = document.getElementById('logo');
const aperteEspaco = document.getElementById('aperte-espaco')
const bgMusic = new Audio('src/audio/Kevin_MacLeod-Pixelland.mp3');
const buttonSound = new Audio('src/audio/button-sound.mp3');
const startSound = new Audio('src/audio/start-sound.mp3');
var count = 0;

function music() {
    bgMusic.play();
}

function playSound() {
    if (count == 0) {
        buttonSound.play();
        sound.style.content = "url(/Estudos/bene-rush/src/SVG/sound-on.svg)";
        setTimeout(music(), 500);
        count++;
    } else {
        buttonSound.play();
        sound.style.content = "url(/Estudos/bene-rush/src/SVG/sound-off.svg)";
        bgMusic.pause();
        count--;
    }
}

function animacaoStartGame() {
    logo.classList.remove('jump');
    logo.classList.add('jump2');

    aperteEspaco.classList.remove('flick');
    aperteEspaco.classList.add('flick2');
}

function startGame() {
    window.location.href = 'game.html';
}

window.addEventListener('keyup', function (key) {
    let codigo = key.which || key.keyCode || 0;

    if (codigo == 32) {
        bgMusic.pause();
        animacaoStartGame();
        startSound.play();
        setTimeout(startGame, 2000);
    }
});