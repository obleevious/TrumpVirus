// https://codepen.io/fede/pen/KVVZpE

var pressed = {},
    audio = document.getElementById('sound'),
    trump = document.getElementById('trump'),
    cha_btn = document.getElementById('cha_btn'),
    xiaohao_btn = document.getElementById('xiaohao_btn'),
    btn_group = document.getElementById('btn_group'),
    isKeyDown = false;

btn_group.addEventListener('click', (event) => {
    if (isKeyDown)
        return;

    audio.load();
    isKeyDown = true;

    if (event.target.id == "cha_btn") {
        audio.play();
        trump.src = "img/cha.jpg";
    }

    if (event.target.id == "xiaohao_btn") {
        audio.play();
        trump.src = "img/xiaohao.jpg";
    }

    isKeyDown = false;
})

document.onkeydown = function (e) {
    // 79 = Q
    if (e.keyCode === 81) {
        cha_btn.click();
    }

    // 87 = W
    if (e.keyCode === 87) {
        xiaohao_btn.click();
    }
};

document.onkeyup = function (e) {
    trump.src = "img/imrs.jpg";
    isKeyDown = false;
};
