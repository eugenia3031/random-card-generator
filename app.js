window.onload = function() {
  cardStyles();
  bodyStyles();
  stampStyles();
  buttonStyles();
  inputs();
};

// Values and icons

let cont = document.querySelector(".container");
let icons = ["♦", "♥", "♠", "♣"];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let randIcon = Math.floor(Math.random() * icons.length);
let randValue = Math.floor(Math.random() * values.length);

// Stamps

let stampOne = document.createElement("h1");
stampOne.classList.add("top-left");
let stampTwo = document.createElement("h1");
stampTwo.classList.add("bottom-right");
stampOne.textContent = icons[randIcon];
stampTwo.textContent = stampOne.textContent;
cont.appendChild(stampOne);
cont.appendChild(stampTwo);

// Number

let value = document.createElement("p");
value.classList.add("center");
value.textContent = values[randValue];
cont.insertBefore(value, stampTwo);

// Styles

function cardStyles() {
  cont.style.height = "400px";
  cont.style.width = "250px";
  cont.style.background = "white";
  cont.style.border = "1px solid black";
  cont.style.borderRadius = "10px";
  cont.style.margin = "5vh auto auto auto";
  cont.style.display = "flex";
  cont.style.flexDirection = "column";
  cont.style.justifyContent = "space-between";
}

function bodyStyles() {
  document.body.style.background = "green";
}

function stampStyles() {
  let stpOne = document.querySelector(".top-left");
  let mid = document.querySelector(".center");
  let stpTwo = document.querySelector(".bottom-right");

  mid.style.textAlign = "center";
  stpTwo.style.textAlign = "right";

  stpOne.style.paddingLeft = "20px";
  stpTwo.style.paddingRight = "20px";

  stpOne.style.fontSize = "75px";
  mid.style.fontSize = "75px";
  stpTwo.style.fontSize = "75px";

  stpOne.style.margin = "0";
  mid.style.margin = "0";
  stpTwo.style.margin = "0 0 5px 0";

  // Colors depending on the card

  if (stpOne.textContent == "♠" || stpOne.textContent == "♣") {
    stpOne.style.color = "black";
    mid.style.color = "black";
    stpTwo.style.color = "black";
  } else {
    stpOne.style.color = "red";
    mid.style.color = "red";
    stpTwo.style.color = "red";
  }
}

// Button

let button = document.createElement("button");
let buttonDiv = document.createElement("div");
buttonDiv.classList.add("div");
button.classList.add("btn");
button.innerHTML = "Regenerate card here!";
cont.parentNode.insertBefore(buttonDiv, cont.nextSibling);
buttonDiv.appendChild(button);

function buttonStyles() {
  let div = document.querySelector(".div");
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.margin = "5vh 0 0 0";
  div.style.height = "5vh";
  div.style.borderRadius = "10px";
}

function resetCard() {
  randIcon = Math.floor(Math.random() * icons.length);
  randValue = Math.floor(Math.random() * values.length);
  stampOne.textContent = icons[randIcon];
  stampTwo.textContent = stampOne.textContent;
  value.textContent = values[randValue];
  stampStyles();
}

// Timer

let myTimer = window.setInterval(interval, 10000);

function interval() {
  resetCard();
}

document.addEventListener("click", event => {
  if (event.target.classList.contains("btn")) {
    resetCard();
  }

  clearInterval(myTimer);
  myTimer = setInterval(interval, 10000);
});

// Width and height

let dimensions = document.createElement("div");
dimensions.classList.add("dimensions");
cont.parentNode.insertBefore(dimensions, cont);

let widthInput = document.createElement("input");
widthInput.type = "text";
widthInput.classList.add("width-input");
dimensions.appendChild(widthInput);

let heightInput = document.createElement("input");
heightInput.type = "text";
heightInput.classList.add("height-input");
dimensions.appendChild(heightInput);

function inputs() {
  let dims = document.querySelector(".dimensions");
  let width = document.querySelector(".width-input");
  let height = document.querySelector(".height-input");

  dims.style.display = "flex";
  dims.style.justifyContent = "center";
  dims.style.margin = "10vh 0 0 0";

  width.placeholder = "Specify width";
  width.style.height = "5vh";
  width.style.marginRight = "10px";

  height.placeholder = "Specify height";
  height.style.height = "5vh";
  height.style.marginLeft = "10px";
}

document.querySelector(".width-input").addEventListener("change", event => {
  if (!isNaN(event.target.value)) {
    cont.style.width = `${Number(event.target.value)}px`;
  } else {
    alert("Please specify a valid number!");
    event.target.value = "";
  }
});

document.querySelector(".height-input").addEventListener("change", event => {
  if (!isNaN(event.target.value)) {
    cont.style.height = `${Number(event.target.value)}px`;
  } else {
    alert("Please specify a valid number!");
    event.target.value = "";
  }
});