main();

function main() {
  const addItems = document.querySelector(".add-items");
  const itemsList = document.querySelector(".plates");
  populateList("items", itemsList);

  addItems.addEventListener("submit", function (event) {
    addItem.call(this, event);
    populateList("items", itemsList);
  });

  itemsList.addEventListener("click", toggleDone);
}

function populateList(plates, platesList) {
  //預設空陣列，如果沒有傳東西進去，也不會報錯中斷
  const items = getLocalStorageData(plates) || [];
  const refreshListItems = items
    .map((plate, index) => {
      return `
    <li>
      <input type="checkbox" data-index=${index} id="item${index}" ${
        plate.done ? "checked" : ""
      }>
      <label for="item${index}">${plate.text}</label>
    </li>
    `;
    })
    .join("");
  platesList.innerHTML = refreshListItems;
}

function getLocalStorageData(dataName) {
  return JSON.parse(localStorage.getItem(dataName));
}

function addItem(event) {
  //阻止 form 表單的預設行為 > 送出 > reload
  event.preventDefault();

  const text = this.querySelector("input[name=item]").value;
  const item = {
    text,
    done: false,
  };

  const items = getLocalStorageData("items") || [];
  items.push(item);

  localStorage.setItem("items", JSON.stringify(items));

  //form 這個元素本身有的 method
  this.reset();
}

//點擊 checkbox 的時候會同時點到 label，我們只需要確定觸發的 checkbox 即可
function toggleDone(event) {
  //理論上不會拿到空陣列，所以沒有做預設處理
  const items = getLocalStorageData("items");
  const itemsList = document.querySelector(".plates");

  if (!event.target.matches("input")) return;

  const item = event.target;
  const index = item.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList("items", itemsList);
}
