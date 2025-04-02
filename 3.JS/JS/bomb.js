const bman = document.querySelector('#bomberman');

const bomb = document.createElement('img')
bomb.src='../../images/bomb.png'
bomb.style.position = 'absolute';

const explode = document.createElement('img')
explode.src='../../images/boomm.png'
explode.style.position = 'absolute';

let x = 0; // X 좌표
let y = 0; // Y 좌표

const step = 10; // 이동 거리
const keys = {}; // 현재 눌린 키 상태 저장
const bombs = []; // 폭탄을 저장할 배열

document.addEventListener("keydown", (e) => {
    keys[e.key] = true; // 키가 눌리면 저장
    updateMovement();
    bombbombbomb();
    boomboomboom();
});

document.addEventListener("keyup", (e) => {
    keys[e.key] = false; // 키에서 손을 떼면 해제
});

function updateMovement() {
    let moveX = 0;
    let moveY = 0;

    if (keys['w']) moveY -= step;
    if (keys['s']) moveY += step;
    if (keys['a']) moveX -= step;
    if (keys['d']) moveX += step;

    move(moveX, moveY);
}
function move(dx, dy) {
    x += dx;
    y += dy;
    bman.style.transform = `translate(${x}px, ${y}px)`;
}



function bombbombbomb(){
    if(keys['x']) drop(x,y);
}



function drop(dx, dy){
    const newBomb = bomb.cloneNode();
    newBomb.style.left = `${dx}px`;
    newBomb.style.top = `${dy+200}px`;
    document.body.appendChild(newBomb);
    bombs.push(newBomb);
}



function boomboomboom(){
    if(keys['z']) boom();
}
function boom(){
    bombs.forEach(b => {
        b.src = explode.src;  // 폭탄이미지를 폭발  이미지로  주소 변경
    });

    bombs.length = 0;  // 폭탄 배열 초기화
}