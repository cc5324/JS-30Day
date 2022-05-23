main();

function main() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  let lastChecked;
  // let c = "go";

  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", function (event) {
      getBetweenChecked.call(this, event, lastChecked);
      lastChecked = this;
    })
  );
}

function getBetweenChecked(event, lastChecked) {
  console.log(`lastChecked`, lastChecked);
  console.log(`this`, this);

  let inBetween = false;
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  // console.log(event);
  console.log(event.shiftKey);
  console.log(this.checked);

  if (event.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      //當迭代到的 checkbox 是當下選擇的 or 上一次選擇的
      //會觸發 inBetween 的開關
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) checkbox.checked = true;
    });
  }

  // lastChecked = this;
  // console.log(`lastChecked`, lastChecked);
  // console.log(`this`, this);
  // console.log(`local c`, c);
}

// console.log(`global c`, c);
