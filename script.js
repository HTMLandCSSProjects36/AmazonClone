let n = 0;
const imgs = document.querySelectorAll(".image-slider img");
const arrowBack = document.querySelector(".arrow-back");
const arrowForward = document.querySelector(".arrow-forward");

function updateImages() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  if (n > imgs.length - 1) {
    n = 0;
  }
  if (n < 0) {
    n = imgs.length - 1;
  }
  imgs[n].style.display = "block";
}

updateImages();

arrowForward.addEventListener("click", () => {
  n++;
  updateImages();
});

arrowBack.addEventListener("click", () => {
  n--;
  updateImages();
});

// setInterval(() => {
//   n++, updateImages();
// }, 3000);
