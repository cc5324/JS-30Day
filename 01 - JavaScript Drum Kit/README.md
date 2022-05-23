# Day01 - Drum Kit

## 學習重點

1. document.querySelector

   1. element + dataset/other-attr
   2. class + dataset/other-attr

2. 監聽事件

   1. keydown: access according to keyCode
   2. transitionend: 改變的屬性很多的時候，可指定特定屬性，access according to propertyName

3. dataset: [筆記](https://hackmd.io/dhTOvLu0SdOSkAl4038Lbw)

## 其他問題

- ### 元素集合的監聽

如 querySelectorAll 得到的陣列形式，沒有辦法一次對全部進行監聽，要迭代個別綁定

- ### 重複按下同樣的按鍵，會有間隔延遲

一般每次播放要花費 2-3 秒，短時間內重複點擊的話，上次播放還沒結束，就不會再重新播放一次

```javascript
const audio = document.querySelector(`audio[data-key="${eventkeyCode}"]`);
audio.currentTime = 0;
audio.play();
```
