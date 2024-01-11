const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const container = document.querySelector(".container");

let index = 0;

prevBtn.addEventListener("click", () => {
  if (index == 0) return;
  index -= 1;

  container.style.transform = `translate(-${100 * index}vw)`;
});

nextBtn.addEventListener("click", () => {
  if (index == 2) return;
  index += 1;

  container.style.transform = `translate(-${100 * index}vw)`;
});

document.querySelector(".btn1").addEventListener("click", function () {
  container.style.transform = "translate(0vw)";
  index = 0;
});

document.querySelector(".btn2").addEventListener("click", function () {
  container.style.transform = "translate(-100vw)";
  index = 1;
});

document.querySelector(".btn3").addEventListener("click", function () {
  container.style.transform = "translate(-200vw)";
  index = 2;
});
