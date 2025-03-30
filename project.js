function setup() {
    let canvas = createCanvas(600, 600); // 左側に合うサイズ
    canvas.parent("left-container"); // `#left-container` の中に配置
}

function draw() {
    background(0);
    let x = frameCount % width;
    let y = height / 2 + sin(frameCount * 0.1) * 100;
    fill(100, 200, 200);
    ellipse(x, y, 20, 20);
}