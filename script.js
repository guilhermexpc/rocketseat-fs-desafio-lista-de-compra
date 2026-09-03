const input = document.getElementById("list-name");
const form = document.querySelector(".main-form");
const listItems = document.getElementById("list-items");

// console.log(listItems)

input.addEventListener("input", () => {
    // console.log(input.value);
    console.log(validateItemName(input.value));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Evento acionado");
    addNewItemList();
})




function addNewItemList() {
    const itemName = input.value.trim();
    console.log(validateItemName(itemName))
    if (!itemName) {
        return;
    }

    const itemId = `list-item-${listItems.children.length + 1}`;
    const newItem = document.createElement("div");
    newItem.classList.add("card-list-item");
    newItem.innerHTML = `
        <div class="item-checkbox">
            <input type="checkbox" id="${itemId}" name="list-item" />
            <label for="${itemId}">${itemName}</label>
        </div>
        <button class="buton" type="button">
            <img src="assets/icons/trashicon.svg" alt="" />
        </button>
    `;

    listItems.append(newItem);
    input.value = "";
}

function validateItemName(itemName) {
    const regex = /^[A-Za-z].*$/g;
    return regex.test(itemName);
}
