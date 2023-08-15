let playerState = 'idle';

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1080;
const CANVAS_HEIGHT = canvas.height = 1080;
let gameFrame = 0;
const staggerFrames = 15

const playerAnimation = []

const idleSrcFiles = [
    './Assets/MolarIdle0.png',
    './Assets/MolarIdle1.png',
    './Assets/MolarIdle2.png',
    './Assets/MolarIdle3.png'
]

playerSourceStates = [
    {'idle': idleSrcFiles}
];

for (let index = 0; index < idleSrcFiles.length; index++) {
    playerAnimation[index] = new Image();
    playerAnimation[index].src = idleSrcFiles[index];
}

const spriteWidth = 1080;
const spriteHeight = 1080;

function animate() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let frameIndex = Math.floor(gameFrame/staggerFrames) % playerAnimation.length;
    ctx.drawImage(playerAnimation[frameIndex], 0, 0, spriteWidth, spriteHeight);
    

    gameFrame++;
    requestAnimationFrame(animate);
};

animate();