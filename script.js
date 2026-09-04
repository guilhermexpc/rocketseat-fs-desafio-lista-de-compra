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
  const regex = /^[A-Za-z].*$/g;
  const regex2 = /[^a-zA-Z ]/g;
  input.value = input.value.replace(regex2, "");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Evento acionado");
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
  // console.log(validateItemName(itemName));
  if (!itemName) {
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
  const regex = /^[A-Za-z].*$/g;
  return String(itemName).replace();
  return regex.test(itemName);
}

function removeHiddenClass(element) {
  element.classList.remove("hidden");

  clearTimeout(alertTimeout);
  alertTimeout = setTimeout(() => {
    element.classList.add("hidden");
  }, 2000);
}
