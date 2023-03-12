// const add = (a, b = 3) => a + b;

// function sayHi() {
//   console.log(`Hey, Justin!`);
// }

// const button = document.querySelector(".clickMe");

// button.addEventListener("click", sayHi);

// setTimeout(() => console.log("Done! Time to eat."), 10000);

function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting("Hello");
const sayHey = createGreeting("Hey");

console.log(sayHello("Justin"));
console.log(sayHello("JoJo"));
