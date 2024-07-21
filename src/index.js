function generateFairyTale(event) {
  event.preventDefault();

  new Typewriter("#story", {
    strings: "Jack and the Beanstock",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let fairyTaleFormElement = document.querySelector("#fairy-tale-generator-form");
fairyTaleFormElement.addEventListener("submit", generateFairyTale);
