import { createBtn } from "./js/createBtn.js";
import { values } from "./refs.js";
const listEl = document.querySelector("list");
document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.querySelector("#list");

  const selectedButtons =
    JSON.parse(localStorage.getItem("name-buttons")) || [];

  const buttons = values.map((value) => {
    const button = createBtn(value, selectedButtons.includes(value.id));
    return button;
  });
  buttonsContainer.innerHTML = buttons.join("");
});
listEl.addEventListener("click", (e) => {
  const btn = e.target;
  if (btn.tagName !== "BUTTON") {
    return;
  }

  console.log(e.target.tagName === "BUTTON");
    if (button.classList.contains("selected")) {
      button.classList.remove("selected");

      const index = selectedButtons.indexOf(value.id);
      if (index > -1) {
        selectedButtons.splice(index, 1);
      }
    } else {
      button.classList.add("selected");

      selectedButtons.push(value.id);
    }

    localStorage.setItem("name-buttons", JSON.stringify(selectedButtons));
});

// button.addEventListener("click", function () {
//});
