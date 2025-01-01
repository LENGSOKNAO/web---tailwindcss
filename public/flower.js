const sl = document.querySelector(".sl");
const s = document.querySelectorAll(".s");
const widhtS = s[0].offsetWidth - 230; // add margin
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");

console.log(btnLeft, btnRight);

let num = 0;

btnRight.addEventListener("click", () => {
  if (num < s.length - 1) {
    num++;
    sl.style.transform = `translateX(-${num * widhtS}px)`;
  }
  console.log(n);
});

btnLeft.addEventListener("click", () => {
  if (num > 0) {
    num--;
    sl.style.transform = `translateX(-${num * widhtS}px)`;
  }
});
