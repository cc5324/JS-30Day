main();

function main() {
  window.addEventListener("scroll", debounce(checkSlide));
}

function checkSlide() {
  const slideImages = document.querySelectorAll(".slide-in");
  slideImages.forEach((slideImage) => {
    const slideInAt =
      window.scrollY + window.innerHeight - slideImage.height / 2;
    const imageBottom = slideImage.offsetTop + slideImage.height;
    const isImageHalfShown = slideInAt > slideImage.offsetTop;
    const isImageNotScrollPass = window.scrollY < imageBottom;
    if (isImageHalfShown && isImageNotScrollPass) {
      slideImage.classList.add("active");
    } else {
      slideImage.classList.remove("active");
    }
  });
}

//每 20 秒才跑一次
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    // console.log("args", args);
    // console.log(args === func);
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, func);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// function debounce(func, wait = 20, immediate = true) {
//   var timeout;
//   return function () {
//     var context = this,
//       args = arguments;
//     console.log("args", args);
//     console.log(args === func);
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }
