const slider = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide");
const widhtSlide = slide[0].offsetWidth - 100; // add margin
const btnR = document.querySelector(".btn-r");
const btnL = document.querySelector(".btn-l");

console.log(widhtSlide);

let n = 0;

btnR.addEventListener("click", () => {
  if (n < slide.length - 1)  {
    n++;
    slider.style.transform = `translateX(-${n * widhtSlide}px)`;
  }
});

btnL.addEventListener("click", () => {
  if (n > 0) {
    n--;
    slider.style.transform = `translateX(-${n * widhtSlide}px)`;
  }
});
