// Grid Selectors
const gridContainer = document.querySelector(".grid");
const gridRangeSize = document.querySelector("#grid-range");
const gridTextValue = document.querySelector(".grid-value");
const createNewGrid = document.querySelector(".createGrid");

// Button Selectors
const colorButtons = Array.from(
  document.querySelector(".color-buttons").children
);

const clearButton = document.querySelector(".clear");
const toggleButton = document.querySelector(".toggle-border");

gridTextValue.textContent = `${gridRangeSize.value} x ${gridRangeSize.value}`;

// Default Grid Size of 16 x 16
function createDefaultGrid(size) {
  for (let i = 0; i < size * size; i++) {
    createGridCells(size);
  }
}

function createGridSize() {
  gridContainer.innerHTML = "";
  for (let i = 0; i < gridRangeSize.value * gridRangeSize.value; i++) {
    createGridCells(gridRangeSize.value);
  }
  generateColor("black");
}

// Helper Function
function createGridCells(number) {
  const gridCells = document.createElement("div");
  gridContainer.style.gridTemplateColumns = `repeat(${number}, auto)`;
  gridContainer.style.gridTemplateRows = `repeat(${number}, auto)`;
  gridContainer.appendChild(gridCells);
}

// Helper Function
function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const color = `rgb(${red},${green},${blue})`;
  return color;
}
function chooseColor() {
  colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("rgb")) {
        generateColor("rgb");
      } else if (button.classList.contains("white")) {
        generateColor("white");
      } else if (button.classList.contains("black")) {
        generateColor("black");
      }
    });
  });
}

function generateColor(color) {
  const gridCells = document.querySelectorAll(".grid > div");
  gridCells.forEach((item) => {
    if (color === "rgb") {
      item.addEventListener("mouseover", function (e) {
        e.target.style.backgroundColor = randomColor();
      });
    }

    item.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = color;
    });
  });
}

function clear() {
  const gridCells = document.querySelectorAll(".grid > div");
  for (let i = 0; i < gridCells.length; i++) {
    gridCells[i].style.backgroundColor = "transparent";
  }
}

function getGridTextValue() {
  gridTextValue.textContent = `${gridRangeSize.value} x ${gridRangeSize.value}`;
}

function toggleBorder() {
  const gridCells = document.querySelectorAll(".grid > div");
  gridCells.forEach((item) => {
    item.classList.toggle("grid-cells");
  });
}

createDefaultGrid(16);
chooseColor();
// Initialize background color of black on the grid items/cells.
generateColor("black");

gridRangeSize.addEventListener("input", getGridTextValue);
createNewGrid.addEventListener("click", createGridSize);
clearButton.addEventListener("click", clear);
toggleButton.addEventListener("click", toggleBorder);
