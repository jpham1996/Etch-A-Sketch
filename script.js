// Grid Selectors
const gridContainer = document.querySelector(".grid-container");
const gridRangeSize = document.querySelector("#grid-size");
const gridTextValue = document.querySelector("#grid-value");
const createNewGrid = document.querySelector(".createGrid");

// Button Selectors
const eraser = document.querySelector(".eraser");
const black = document.querySelector(".black");
const rgb = document.querySelector(".rgb");
const clear = document.querySelector(".clear");

gridTextValue.textContent = `${gridRangeSize.value} x ${gridRangeSize.value}`;

// Default Grid Size of 16 x 16
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  const flexBoxItem = document.createElement("div");
  row.classList.add("row");
  flexBoxItem.classList.add("flexbox-item");

  for (let j = 0; j < 16; j++) {
    row.appendChild(flexBoxItem.cloneNode(true));
  }
  gridContainer.appendChild(row);
}

function randomizeColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const color = `rgb(${red},${green},${blue})`;
  return color;
}

function createGridSize() {
  gridContainer.innerHTML = "";
  for (let i = 0; i < gridRangeSize.value; i++) {
    const row = document.createElement("div");
    const flexBoxItem = document.createElement("div");
    row.classList.add("row");
    flexBoxItem.classList.add("flexbox-item");

    for (let j = 0; j < gridRangeSize.value; j++) {
      row.appendChild(flexBoxItem.cloneNode(true));
    }

    gridContainer.appendChild(row);
  }
}

gridRangeSize.addEventListener("input", function () {
  gridTextValue.textContent = `${gridRangeSize.value} x ${gridRangeSize.value}`;
});

createNewGrid.addEventListener("click", createGridSize);

eraser.addEventListener("click", function () {
  gridContainer.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("flexbox-item")) {
      e.target.style.backgroundColor = "white";
    }
  });
});

black.addEventListener("click", function () {
  gridContainer.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("flexbox-item")) {
      e.target.style.backgroundColor = "black";
    }
  });
});

rgb.addEventListener("click", function () {
  gridContainer.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("flexbox-item")) {
      e.target.style.backgroundColor = randomizeColor();
    }
  });
});

clear.addEventListener("click", function () {
  const flexBoxItems = document.querySelectorAll(".flexbox-item");
  for (let i = 0; i < flexBoxItems.length; i++) {
    flexBoxItems[i].style.backgroundColor = "transparent";
  }
});

gridContainer.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("flexbox-item")) {
    e.target.style.backgroundColor = "black";
  }
});
