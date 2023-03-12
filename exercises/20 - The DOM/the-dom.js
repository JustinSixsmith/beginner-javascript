const p = document.querySelector("p");
const divs = document.querySelectorAll("p");

const heading = document.querySelector("h2");
console.log(heading.textContent);
console.log(heading.innerHTML);
// Set the text content property on the h2 element
// heading.textContent = "Justin is cool";
// console.log(heading.textContent);

const pizzaList = document.querySelector(".pizza");
pizzaList.insertAdjacentText("afterbegin", "🍕");

const pic = document.querySelector(".nice");
pic.classList.add("open");
pic.classList.remove("cool");
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle("round");
}

pic.addEventListener("click", toggleRound);

pic.alt = "white sands";
pic.width = 200;

pic.addEventListener("load", function () {
  console.log(pic.naturalWidth);
});

pic.setAttribute("alt", "REALLY CUTE PUP");
console.log(pic.getAttribute("alt"));

const custom = document.querySelector(".custom");
console.log(custom.dataset);

custom.addEventListener("click", function () {
  alert(`Welcome, ${custom.dataset.name} ${custom.dataset.last}`);
});
