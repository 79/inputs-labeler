import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

// NOTE: ruby formatter
// foo.each.with_index do |el, idx|
//   print "[" if idx % 3 == 0
//   print "\"#{el}\", "
//   print "]\n" if idx % 3 == 2
// end

let xs = [
  // ["ethnicity", "education", "location"],
  ["native-american", "high-school", "urban"],
  ["black", "bachelor-degree", "urban"],
  ["hispanic", "less-than-high-school", "rural"],
  ["white", "some-college", "suburban"],
  ["native-american", "bachelor-degree", "urban"],
  ["native-american", "advanced-degree", "suburban"],
  ["other", "high-school", "rural"],
  ["asian", "less-than-high-school", "rural"],
  ["hispanic", "some-college", "rural"],
  ["asian", "high-school", "suburban"],
  ["native-american", "some-college", "suburban"],
  ["black", "advanced-degree", "suburban"],
  // ["black", "some-college", "rural"],
  // ["black", "less-than-high-school", "rural"],
  // ["native-american", "some-college", "rural"],
  // ["hispanic", "some-college", "suburban"],
  // ["asian", "bachelor-degree", "urban"],
  // ["native-american", "less-than-high-school", "urban"],
  // ["other", "bachelor-degree", "rural"],
  // ["black", "high-school", "rural"],
  // ["other", "less-than-high-school", "suburban"],
  // ["asian", "some-college", "rural"],
  // ["native-american", "high-school", "suburban"],
  // ["other", "some-college", "rural"],
  // ["other", "high-school", "rural"],
  // ["native-american", "some-college", "urban"],
  // ["black", "high-school", "suburban"],
  // ["black", "some-college", "suburban"],
  // ["black", "high-school", "rural"],
  // ["other", "high-school", "suburban"],
  // ["white", "high-school", "rural"],
  // ["black", "high-school", "rural"],
]

let ys = window.ys = [];

// Sketch scope
const sketch = (p5) => {

  // Variables scoped within p5
  const canvasWidth = p5.windowWidth;
  const canvasHeight = p5.windowHeight;
  // const d = new Star(500, 300, 4);

  const mapWidth = canvasHeight * .60;
  const mapHeight = canvasHeight;

  // make library globally available
  window.p5 = p5;

  let xIdx = 0;

  // Setup function
  // ======================================
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    canvas.parent('sketch');
  }

  // Draw function
  // ======================================
  p5.draw = () => {
    p5.background('#c0ffee');
    p5.fill("black")

    if (xIdx == xs.length) {
      p5.fill("yellow")
      p5.rect(0, 0, canvasWidth, canvasHeight);
      return;
    }

    p5.rect(0, 0, mapWidth, mapHeight);
    p5.text("hello");

    p5.textAlign(p5.CENTER, p5.TOP);
    let x = xs[xIdx]

    if (p5.mouseX < mapWidth) {
      let mouseXNormalized = p5.mouseX / mapWidth;
      x = x.concat(["x: " + mouseXNormalized.toFixed(2) ])
    } else {
      x = x.concat(["x: OUT OF BOUNDS"])
    }

    if (p5.mouseY < mapHeight) {
      let mouseYNormalized = (mapHeight - p5.mouseY) / mapHeight;
      x = x.concat(["y: " + mouseYNormalized.toFixed(2) ])
    } else {
      x = x.concat(["y: OUT OF BOUNDS"])
    }

    x = x.join("\n\n")

    p5.textSize(24)
    p5.text(
      x,
      canvasHeight * .60,
      0,
      canvasWidth - (canvasHeight * .60),
      canvasHeight
    )

    p5.fill('magenta')
    p5.ellipse(p5.mouseX, p5.mouseY, 20, 20)
  }

  p5.mouseClicked = () => {
    let predX = p5.mouseX;
    let predY = canvasHeight - p5.mouseY;

    ys.push([predX, predY]);
    xIdx += 1;
  }
}

export default sketch;
