import { createBtn } from "./js/createBtn.js";
import { values } from "./refs.js";

document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.querySelector("#list");

  const selectedButtons =
    JSON.parse(localStorage.getItem("name-buttons")) || [];

  const buttons = values.map((value) => {
    const button = createBtn(value, selectedButtons.includes(value.id));
    return button;
    // if (selectedButtons.includes(value.id)) {
    //   button.classList.add("selected");
    // }
  });
  console.log(JSON.stringify(buttons));
  console.log(buttons.join(""));
  buttonsContainer.innerHTML = buttons.join("");
});

// button.addEventListener("click", function () {
//     if (button.classList.contains("selected")) {
//       button.classList.remove("selected");
//       // Remove button ID from selectedButtons array
//       const index = selectedButtons.indexOf(value.id);
//       if (index > -1) {
//         selectedButtons.splice(index, 1);
//       }
//     } else {
//       button.classList.add("selected");
//       // Add button ID to selectedButtons array
//       selectedButtons.push(value.id);
//     }
//     // Save selectedButtons array to local storage
//     localStorage.setItem("name-buttons", JSON.stringify(selectedButtons));
//   });
// buttonsContainer.appendChild(button);
