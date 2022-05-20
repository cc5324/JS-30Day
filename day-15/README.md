1. style checkboxes

2. 插入新的元素

to optimize:

- [ ] 不要用 innerHTML
- [ ] 不要一次重新 render 整個 list

3. Event Delegation
   為什麼不適合把監聽事件綁在`<input>`上，因為 list item 會動態新增

```js
const checkBoxes = document.querySelectorAll("input");
checkBoxes.forEach((input) =>
  input.addEventListener("click", alert("listened"))
);
```

在新增之前，這串程式碼就跑完了，所以新增的 item 都不會被監聽到

所以要把監聽器綁在會一直存在的東西上面，通常是他們的父元素
