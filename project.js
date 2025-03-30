let backgroundColorR = 0;
let backgroundColorG = 0;
let backgroundColorB = 0;
let ballColor = "#64c8c8";

function setup() {
    let canvas = createCanvas(window.innerWidth * 0.5, window.innerHeight * 0.5);
    canvas.parent("left-container");

    let sliderR = document.getElementById("colorSliderR");
    let sliderG = document.getElementById("colorSliderG");
    let sliderB = document.getElementById("colorSliderB");
    let colorPicker = document.getElementById("colorPicker");

    sliderR.addEventListener("input", function () {
        backgroundColorR = Number(sliderR.value);
    });

    sliderG.addEventListener("input", function () {
        backgroundColorG = Number(sliderG.value);
    });

    sliderB.addEventListener("input", function () {
        backgroundColorB = Number(sliderB.value);
    });

    colorPicker.addEventListener("input", function () {
        ballColor = colorPicker.value;
    });
}

function draw() {
    background(backgroundColorR, backgroundColorG, backgroundColorB);
    let x = frameCount % width;
    let y = height / 2 + sin(frameCount * 0.1) * 100;
    fill(ballColor);
    ellipse(x, y, 20, 20);
}

function windowResized() {
    resizeCanvas(window.innerWidth * 0.5, window.innerHeight * 0.5);
}