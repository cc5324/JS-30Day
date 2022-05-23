# Day01 - CSS + JS Clock

## 學習重點

1. new Date(): [筆記](https://hackmd.io/aN9x-xWqTDy1JLq0RnC9nA?both)
2. setInterval

## 其他問題

### 指針繞一圈回到初始位置，角度從 450deg 回到 90deg， 故在 transition 期間快速逆時針旋轉

詳細說明:如同教學影片，是每一秒都會用 `new Date()` 取得當下時間，根據當下的秒/分/時去計算角度，所以回到 0 秒/分/時，會需要在瞬間完成從 450deg 回到 90deg！

#### 方法一

在回到初始值的當下，拿掉 transition，避免從 450deg 到 90deg 間的 transition。

```javascript
function preventCounterclockwise(element, degree) {
  if (degree === 90) {
    element.style.transition = `all 0s`;
  } else {
    element.style.transition = `all 0.05s ease-out`;
  }
}
```

#### 方法二

只在載入頁面的時候，以 `new Date()` 取得初始時間，後續每秒執行 function 只根據經過的秒數計算指針角度的累加，角度會持續累加，就沒有需要從 450deg 回到 90deg 的問題情境。
缺點：setInterval 不適合用來計算精確的時間，執行上會有毫秒上的誤差，人體沒有感覺，但假如頁面開啟的時間拉長，誤差有機會大到和真正的時間有差距。

```javascript
function initDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  // return { seconds, minutes, hours };

  const DEFAULT_DEGREE = 90;
  secondsDegree = (360 / 60) * seconds + DEFAULT_DEGREE;
  minutesDegree = (360 / 60) * minutes + DEFAULT_DEGREE;
  hoursDegree = (360 / 12) * (hours % 12) + DEFAULT_DEGREE;
}

function updateDate() {
  secondsDegree += (1 / 60) * 360;
  minutesDegree += (1 / 60 / 60) * 360;
  hoursDegree += 1 / 60 / 60 / 12;

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
```
