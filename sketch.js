let cubi = [];
let copie = 30;

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");

  for (let i = 0; i < copie; i++) {
    let cubo = {
      x: random(-1000, 1000),
      y: random(-1000, 1000),
      z: random(-1000, 1000),
      size: 100,
      color: random(["pink", "yellow", "blue"]),
      rotationAxis: random(["x", "y", "z"]),
    };
    cubi.push(cubo);
  }
}

function draw() {
  background(220);
  orbitControl();

  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z);
    if (cubo.rotationAxis == "x") {
      rotateX(frameCount / 10);
    } else if (cubo.rotationAxis == "y") {
      rotateY(frameCount / 10);
    } else {
      rotateZ(frameCount / 10);
    }
    fill(cubo.color);
    box(cubo.size);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
