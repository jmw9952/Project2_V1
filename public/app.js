// window.addEventListener('load', function () {

    //Open and connect socket
    let socket = io();
    //Listen for confirmation of connection
    socket.on('connect', function () {
        console.log("Connected");
    });

// })


//p5 mouseclicked

let defaultImage;
let backgroundImg;
let imgPos = [];

function preload(){
    defaultImage = loadImage("media/birthofbernie.jpg");
    // console.log(defaultImage);
    backgroundImg = loadImage("media/Venus-of-Urbino-Titian.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    //nipple time
    socket.on('data', function (obj) {
        console.log(obj);
        imgPos.push(obj);
        // drawNipple(obj);
    });

}

function draw (){
    imageMode(CENTER);
    image(backgroundImg, width/2, height/2);
    for (i=0; i<imgPos.length; i++){
        drawNipple(imgPos[i]);
    }
}

//get mouse position
function mouseClicked() {
    let mousePos = { x: mouseX, y: mouseY };
    // console.log(mousePos);
    socket.emit('data', mousePos);

}

// draw nipple
function drawNipple(pos) {
    imageMode(CENTER);
    image(defaultImage, pos.x, pos.y, 240, 150);
}