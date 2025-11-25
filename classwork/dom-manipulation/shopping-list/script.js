const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");

// 2. Create function to add item
let items = [];
function addItem() {
  const inputValue = itemInput.value;
  items.push(inputValue);

  // filter out empty values, because what if user keeps on clicking add button like an idiot
  items = items.filter((item) => {
    return item.trim() !== "";
  });

  // first clean and re-render from the list
  itemList.innerHTML = "";
  items.forEach((i, index) => {
    itemList.innerHTML += `
    <div class="list-item" data-index="${index}">
      <p>${i}</p>
      <button class="delete-btn" id="delete-btn">Delete</button>
    </div>`;
  });
  itemInput.value = "";
  console.log(items);
}

// 3. Create function to remove item
function removeItem(button) {
  // since the event listener has been added to the parent, i'll allow this function to be executable only if the clicked target is the delete button
  if (button.target.classList.contains("delete-btn")) {
    const index = button.target.parentElement.dataset.index;
    items.splice(index, 1);
    // Re-render the list (calling addItem effectively re-renders because of how it's written, though slightly inefficient)
    // A better way would be to separate render logic, but sticking to original logic for now with minor fix if needed.
    // Actually, calling addItem() adds the *current* input value again if not empty.
    // We should probably separate render logic, but let's stick to the user's logic flow for now to avoid breaking changes,
    // EXCEPT: calling addItem() here will try to add `itemInput.value` again.
    // Let's refactor slightly to separate render.
    renderItems();
  }
}

function renderItems() {
    itemList.innerHTML = "";
    items.forEach((i, index) => {
      itemList.innerHTML += `
      <div class="list-item" data-index="${index}">
        <p>${i}</p>
        <button class="delete-btn" id="delete-btn">Delete</button>
      </div>`;
    });
}

// Refactored addItem to use renderItems
function addItem() {
    const inputValue = itemInput.value;
    if (inputValue.trim() !== "") {
        items.push(inputValue);
        itemInput.value = "";
        renderItems();
    }
}


// 4. Add event listeners
addBtn.addEventListener("click", addItem);

// i am adding delete event listener to the parent item because at the end i'll be deleting the whole list item element
itemList.addEventListener("click", (ev) => removeItem(ev));

// allowing user to add by pressing key
itemInput.addEventListener("keydown", (e) => {
  // only for enter key, else it's gonna be a disaster
  if (e.key === "Enter") {
    addItem();
  }
});
