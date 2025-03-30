let backgroundColor = 0;
let ballColor = "#64c8c8";

function setup() {
    let canvas = createCanvas(window.innerWidth * 0.5, window.innerHeight * 0.5);
    canvas.parent("left-container");

    let slider = document.getElementById("colorSlider");
    let colorPicker = document.getElementById("colorPicker");

    slider.addEventListener("input", function () {
        backgroundColor = Number(slider.value);
    });

    colorPicker.addEventListener("input", function () {
        ballColor = colorPicker.value;
    });
}

function draw() {
    background(backgroundColor);
    let x = frameCount % width;
    let y = height / 2 + sin(frameCount * 0.1) * 100;
    fill(ballColor);
    ellipse(x, y, 20, 20);
}

function windowResized() {
    resizeCanvas(window.innerWidth * 0.5, window.innerHeight * 0.5);
}