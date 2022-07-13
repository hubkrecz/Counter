import "./styles.css";

const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
const increaseButton = document.querySelector("#increase");
let textInNumber = null;

const decreaseFunction = () => {
  textInNumber = document.querySelector("#number").textContent;
  textInNumber = textInNumber - 1;
  document.querySelector("#number").textContent = textInNumber;
};

const resetFunction = () => {
  document.querySelector("#number").textContent = "0";
};

const increaseFunction = () => {
  textInNumber = document.querySelector("#number").textContent;
  textInNumber = textInNumber - 0 + 1;
  document.querySelector("#number").textContent = textInNumber;
};

decreaseButton.addEventListener("click", decreaseFunction);
resetButton.addEventListener("click", resetFunction);
increaseButton.addEventListener("click", increaseFunction);
