let grid = document.getElementById("grid");
let container = document.getElementById("container");
let slider = document.getElementById("myRange");
let output = document.getElementById("output");

let gridMade;
var randToggle = 0;

let values = [4, 9, 16, 25, 36, 49, 64, 81, 100];
slider.oninput = function () {
  output.innerHTML = "Grid of " + values[this.value] + " boxes";
  output.value = values[this.value];
};
slider.oninput(25);
function createGrid() {
  if (gridMade === 1) {
    clearGrid();
    createBoxes();
  } else {
    createBoxes();
  }
}

function randomColor() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  let randColor =
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")";
  return randColor;
}

function randomToggle() {
  if (randToggle === 0) {
    randToggle = 1;
  } else {
    randToggle = 0;
  }
  return randToggle;
}

function clearGrid() {
  gridMade = 0;
  container.remove();
  container = document.createElement("div");
  container.className = "container";
  container.id = "container";
  grid.appendChild(container);
}

function createBoxes() {
  gridMade = 1;

  let slideValue = +output.value;
  let numOfCols = Math.sqrt(slideValue); // +prompt("How many Columns?");
  let numOfRows = Math.sqrt(slideValue); //+prompt("How many Rows?");
  //Creates number of rows
  for (let r = 1; r <= numOfRows; r++) {
    let row = document.createElement("div");
    row.className = "row";
    // Creates number of columns
    for (let c = 1; c <= numOfCols; c++) {
      let box = document.createElement("div");
      box.className = "box";
      box.addEventListener("mouseenter", (e) => {
        // Allows color fade in/out
        // //box.className = "box hovering";
        // let color = document.getElementById("color");
        let colorPicked = color.value;

        console.log("picked " + colorPicked);
        console.log("random " + randToggle);
        if (randToggle === 0) {
          box.style.backgroundColor = colorPicked;
        } else if (randToggle === 1) {
          box.style.backgroundColor = randomColor();
        }
        box.addEventListener("mouseout", (e) => {
          // Allow color fade in/out
          //box.className = "box notHovering";
        });
      });

      row.appendChild(box);
      // Adds color on hover
    }
    container.appendChild(row);
  }
  return gridMade;
}
