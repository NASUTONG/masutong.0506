/**
 * @typedef {import("./p5/types").Graphics} Graphics
 *
 *@typedef {object}cubo
 *@property {number}x
 *@property {number}y
 *@property {number}z
 *@property {number}size
 *@property {string}color
 *@property {function} rotationFunction
 */

//

/**@type {cubo[]}*/
let cubi = [];

let copie = 30;

/** @type {Graphics} */
let g;

//

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");

  g = createGraphics(100, 100);

  let distanza = 500;
  for (let i = 0; i < copie; i++) {
    let cubo = {
      x: random(-distanza, distanza),
      y: random(-distanza, distanza),
      z: random(-distanza, distanza),
      size: 100,
      color: random(["pink", "yellow", "blue"]),
      rotationFunction: random([rotateX, rotateY]),
    };
    cubi.push(cubo);
  }
}

function draw() {
  background(220);
  orbitControl();
  rotateY(frameCount * 0.001);
  noStroke();

  g.background("yellow");
  g.ellipseMode(CENTER);
  g.noStroke();
  g.fill("pink");
  g.fill("blue");
  g.text("MaSuTong", 0, g.height);
  g.textSize(20);

  texture(g);

  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z);

    let velocita = frameCount * 0.005;
    cubo.rotationFunction(velocita);
    rotateZ(velocita);

    box(cubo.size);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
