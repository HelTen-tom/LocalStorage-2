import { createBtn } from "./js/createBtn.js";
import { values } from "./refs.js";
const listEl = document.querySelector("#list");
document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.querySelector("#list");

  const selectedButtons =
    JSON.parse(localStorage.getItem("name-buttons")) || [];
  console.log(selectedButtons);
  const buttons = values.map((value) => {
    console.log(value);
    const button = createBtn(value, selectedButtons.includes(value.id));
    return button;
  });
  console.log(buttons);
  buttonsContainer.innerHTML = buttons.join("");
});
listEl.addEventListener("click", (e) => {
  const btn = e.target;
  if (btn.tagName !== "BUTTON") {
    return;
  }
  console.log(e.target.tagName === "BUTTON");
  const selectedButtons =
    JSON.parse(localStorage.getItem("name-buttons")) || [];
  if (btn.classList.contains("selected")) {
    btn.classList.remove("selected");

    const index = selectedButtons.indexOf(btn.dataset.id);
    if (index > -1) {
      selectedButtons.splice(index, 1);
    }
  } else {
    btn.classList.add("selected");

    selectedButtons.push(Number(btn.dataset.id));
  }

  localStorage.setItem("name-buttons", JSON.stringify(selectedButtons));
});

// button.addEventListener("click", function () {
//});
