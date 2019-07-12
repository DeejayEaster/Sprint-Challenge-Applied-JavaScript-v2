/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="" />
    <img src="./assets/carousel/.jpeg" />
    <img src="./assets/carousel/.jpeg" />
    <img src="./assets/carousel/.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carEntry = document.querySelector(".carousel-container");
const newCarousel = createCar();
carEntry.appendChild(newCarousel);
let currentIndex = 0;

function createCar() {
  const carousel = document.createElement("div");
  const left = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");
  const right = document.createElement("div");

  carousel.classList.add("carousel");

  left.classList.add("left-button");
  right.classList.add("right-button");
  img1.classList.add("img-show");
  img2.classList.add("img-hide");
  img3.classList.add("img-hide");
  img4.classList.add("img-hide");

  img1.setAttribute("id", "img");
  img2.setAttribute("id", "img");
  img3.setAttribute("id", "img");
  img4.setAttribute("id", "img");

  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/trees.jpeg";
  img3.src = "./assets/carousel/turntable.jpeg";
  img4.src = "./assets/carousel/computer.jpeg";
  left.textContent = "<";
  right.textContent = ">";

  carousel.appendChild(left);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(right);

  right.addEventListener("click", function() {
    const images = document.querySelectorAll("#img");
    currentIndex === images.length - 1
      ? (currentIndex = 0)
      : (currentIndex += 1);
    images.forEach(img => img.classList.replace("img-show", "img-hide"));
    images[currentIndex].classList.replace("img-hide", "img-show");
    console.log(images);
  });
  left.addEventListener("click", function() {
    const images = document.querySelectorAll("#img");
    currentIndex === 0
      ? (currentIndex = images.length - 1)
      : (currentIndex -= 1);
    images.forEach(img => img.classList.replace("img-show", "img-hide"));
    images[currentIndex].classList.replace("img-hide", "img-show");
    console.log("kachow");
  });

  return carousel;
}
