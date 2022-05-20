// main();

// function main() {

// }

const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

addItems.addEventListener("submit", addItem);

function addItem(event) {
  //阻止 form 表單的預設行為 > 送出 > reload
  event.preventDefault();

  const text = this.querySelector("input[name=item]").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  //.setItem
  //.getItem
  //.removeItem
  //要給 localStorage string
  //JSON.stringify
  //要轉回來用 JSON.parse

  // console.log(items);
  //form 這個元素本身有的 method
  this.reset();
}

//預設空陣列，如果沒有傳東西進去，也不會報錯中斷
function populateList(plates = [], platesList) {
  const newItem = plates
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
  platesList.innerHTML = newItem;
  // console.log(newItem);
}

//input 的 id 跟 label 的 for 可利用相同名稱聯動

populateList(items, itemsList);

//點擊 checkbox 的時候會同時點到 label，我們只需要確定觸發的 checkbox 即可
function toggleDone(event) {
  if (!event.target.matches("input")) return;
  // console.log(event, event.target);
  const item = event.target;
  const index = item.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
  console.log(items);
}

itemsList.addEventListener("click", toggleDone);
