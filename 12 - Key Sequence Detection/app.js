main();

function main() {
  const pressedKeys = [];
  const secretKey = "secret";

  window.addEventListener("keyup", function (event) {
    recordPressedKeys(event, secretKey, pressedKeys);
    checkPressedKeys(secretKey, pressedKeys);
    showInput(pressedKeys);
  });
}

function recordPressedKeys(event, secretKey, pressedKeys) {
  pressedKeys.push(event.key);

  if (pressedKeys.length > secretKey.length) {
    pressedKeys.shift();
  }
}

function checkPressedKeys(secretKey, pressedKeys) {
  if (pressedKeys.join("") === secretKey) {
    cornify_add();
  }
}

function showInput(pressedKeys) {
  const showInput = document.querySelector("#showInput");
  console.log(showInput);
  showInput.textContent = pressedKeys.join("");
}
