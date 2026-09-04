const input = document.getElementById("list-name");
const form = document.querySelector(".main-form");
const listItems = document.getElementById("list-items");
const cartListItems = document.getElementsByClassName("card-list-item");
const alertbox = document.querySelector(".alertbox");
const alertboxButton = alertbox.querySelector("button");
let listNumber = cartListItems.length;
let alertTimeout;

console.log("aq");
console.log(alertboxButton);

input.addEventListener("input", () => {
  input.classList.remove("invalid");
  input.removeAttribute("aria-invalid");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addNewListItem();
});

Array.from(cartListItems).forEach((item, index) => {
  // const button = item.querySelector(`#btn-item-${index + 1}`);
  const button = item.querySelector("button");
  removeListItem(button);
  console.log(button);
});

alertboxButton.addEventListener("click", () => {
  alertbox.classList.add("hidden");
});

function addNewListItem() {
  const itemName = input.value.trim();
  if (!validateItemName(itemName)) {
    input.classList.add("invalid");
    input.setAttribute("aria-invalid", "true");
    showAlert("Digite um item usando apenas letras e espaços.");
    return;
  }
  listNumber += 1;
  // const itemId = `input-item-${listItems.children.length + 1}`;
  // cartListItems.item(cartListItems.length).querySelector();

  const itemId = `input-item-${listNumber}`;

  const newItem = document.createElement("div");
  newItem.classList.add("card-list-item");

  const itemContent = document.createElement("div");
  itemContent.classList.add("item-checkbox");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = itemId;
  checkbox.name = "list-item";

  const label = document.createElement("label");
  label.htmlFor = itemId;
  label.textContent = itemName;
  itemContent.appendChild(checkbox);
  itemContent.appendChild(label);

  const newItemButton = document.createElement("button");
  newItemButton.type = "button";
  const trashIcon = document.createElement("img");
  trashIcon.src = "assets/icons/trashicon.svg";
  trashIcon.alt = "";
  newItemButton.appendChild(trashIcon);

  newItem.appendChild(itemContent);
  newItem.appendChild(newItemButton);

  listItems.appendChild(newItem);

  // newItem.innerHTML = `
  //       <div class="item-checkbox">
  //           <input type="checkbox" id="${itemId}" name="list-item" />
  //           <label for="${itemId}">${itemName}</label>
  //       </div>

  //   `;
  removeListItem(newItemButton);
  input.value = "";
}

function removeListItem(button) {
  button.addEventListener("click", () => {
    const cardItem = button.parentElement;
    cardItem.remove();
    console.log(cardItem);
    removeHiddenClass(alertbox);
  });
}

function validateItemName(itemName) {
  const regex = /^[\p{L}]+(?: [\p{L}]+)*$/u;
  return regex.test(itemName);
}

function removeHiddenClass(element) {
  showAlert("O item foi removido da lista.");
}

function showAlert(message) {
  alertbox.querySelector("span").textContent = message;
  alertbox.classList.remove("hidden");

  clearTimeout(alertTimeout);
  alertTimeout = setTimeout(() => {
    alertbox.classList.add("hidden");
  }, 3000);
}
