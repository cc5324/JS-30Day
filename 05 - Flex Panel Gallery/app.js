function main() {
  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel) => {
    panel.addEventListener("click", toggleOpen);
    panel.addEventListener("transitionend", toggleActive);
  });
}

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(event) {
  if (event.propertyName === "flex-grow") {
    this.classList.toggle("open-active");
  }
}

main();
