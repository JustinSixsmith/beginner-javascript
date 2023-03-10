const add = (a, b = 3) => a + b;

function sayHi() {
  console.log(`Hey, Justin!`);
}

const button = document.querySelector(".clickMe");

button.addEventListener("click", sayHi);

setTimeout(() => console.log("Done! Time to eat."), 10000);
