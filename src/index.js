function displayFairyTale(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFairyTale(event) {
  event.preventDefault();
  let generatingMessage = document.querySelector("#story");
  generatingMessage.innerHTML = "🍄 Generating Fairy Tale...";

  let userInput = document.querySelector("#user-input");
  let apiKey = "fb24932f22a0f4a4b10t5cee3cc7fo79";
  let prompt = `Please tell me a short fairy tale about ${userInput.value}.`;
  let context =
    "You are a smart and imaginative AI assitant with knowledge of fairy tales. Generate a short fairy tale. Use HTML paragraph formatting. Use fewer than 201 words.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayFairyTale);
}

let fairyTaleFormElement = document.querySelector("#fairy-tale-generator-form");
fairyTaleFormElement.addEventListener("submit", generateFairyTale);
