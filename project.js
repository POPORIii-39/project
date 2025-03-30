let bgColor = 0;

function setup() {
    let canvas = createCanvas(windowWidth * 0.5, windowHeight * 0.5);
    canvas.parent("left-container");
}

function draw() {
    let slider = document.getElementById("colorSlider");

    slider.addEventListener("input", function () {
        bgColor = Number(slider.value);
    });

    background(bgColor);
    let x = frameCount % width;
    let y = height / 2 + sin(frameCount * 0.1) * 100;
    fill(100, 200, 200);
    ellipse(x, y, 20, 20);
}

function windowResized() {
    resizeCanvas(windowWidth * 0.5, windowHeight * 0.5);
}