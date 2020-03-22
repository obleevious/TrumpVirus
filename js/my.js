// https://codepen.io/fede/pen/KVVZpE

var pressed = {},
    audio = document.getElementById('sound'),
    output = document.getElementById('output'),
    maxValue = 2,
    duration,
    volume;

document.onkeydown = function (e) {
    audio.load();

    // 79 = Q
    if (e.keyCode === 81) {
        audio.volume = 1;
        audio.play();
        return false;
    }
};

document.onkeyup = function (e) {

};
