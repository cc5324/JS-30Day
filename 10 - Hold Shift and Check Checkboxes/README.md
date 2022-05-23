1. checkbox 的監聽事件: `change` v.s `click` v.s `input`

   - 對於 checkbox 來說，三者的功能非常相像
   - 單純要偵測 checkbox 是否有被勾選(checked)，監測 event 選擇 change、click 或 input 都可以做到
   - `shiftKey` 這個屬性只有 click event 底下才有，所以這個需求(按住 shift 可以勾選中間所有 checkboxes)，只有監聽 click 事件才可以做到

其他 input type 的事件類型比較，可以參考：https://stackoverflow.com/questions/58016503/click-vs-input-vs-change-for-checkboxes

2. addEventListener 如何傳參數？（不想讓 lastChecked 這個變數變成全域物件

```javascript
//當迭代到的 checkbox 是當下選擇的 or 上一次選擇的
//會觸發 inBetween 的開關
if (checkbox === this || checkbox === lastChecked) {
  inBetween = !inBetween;
}

//用更詳細、原始的程式碼表示如下：
//但這個方式只能由上到下選擇
//為了由下到上也可以有效果，用 `inBetween = !inBetween`
// if (checkbox === this) {
//   inBetween = true;
// } else if (checkbox === lastCheckedInput) {
//   inBetween = false;
// }
```
