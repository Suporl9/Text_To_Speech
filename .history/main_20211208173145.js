let gridContainer = document.querySelector(".gridContainer");

const title = document.querySelector(".title");
// console.log(title);
const colapsibleDiv = document.querySelector(".collapsible");

const content = document.querySelector(".content1");

let voiceSelect = document.getElementById("voiceSelect");

let SpeakText = document.querySelector(".SpeakText");

const Inputform = document.querySelector(".Inputform");

const textValue = document.querySelector(".textValue");

const ImagesAndTexts = [
  {
    image: "happy.jpg",
    text: "i am happy",
  },
  {
    image: "angry.jpeg",
    text: "i am angry",
  },
  {
    image: "sad.jpg",
    text: "i am sad",
  },
  {
    image: "hungry.jpg",
    text: "i am hungry",
  },
  {
    image: "bathroom.jpg",
    text: "i want to go to bathroom",
  },

  {
    image: "hurt.png",
    text: "i am hurt",
  },
  {
    image: "scared.png",
    text: "i am scared",
  },
  {
    image: "sleepy.jpg",
    text: "i am sleepy",
  },
  {
    image: "play.jpeg",
    text: "i am angry",
  },
];

let arr = [];

const synth = window.speechSynthesis;

synth.addEventListener("voiceschanged", () => {
  // console.log(synth.getVoices());

  let Voices = synth.getVoices();

  Voices.forEach((voice) => {
    arr.push(voice);
  });

  for (let i = 0; i < Voices.length; i++) {
    let option = document.createElement("option");

    option.classList.add("optionStyle");

    option.textContent = Voices[i].name + " (" + Voices[i].lang + ")";

    if (Voices[i].default) {
      option.textContent += " -- DEFAULT";
    }

    option.setAttribute("data-lang", Voices[i].lang);

    option.setAttribute("data-name", Voices[i].name);

    voiceSelect.appendChild(option);
  }
});

Inputform.onsubmit = function (e) {
  e.preventDefault();

  let utterThis = new SpeechSynthesisUtterance(textValue.value);

  let selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === selectedOption) {
      utterThis.voice = arr[i];
    }
  }

  synth.speak(utterThis);
};

function startFunction() {
  ImagesAndTexts.forEach((ImageAndText) => {
    let grid_item = document.createElement("div");
    grid_item.classList.add("grid-item");

    grid_item.innerHTML = `
        <img src="./assets/${ImageAndText.image}" class="imgClass"/>
        <h2 class="labelForSpeech" >${ImageAndText.text.toUpperCase()}</h2>
    `;

    gridContainer.appendChild(grid_item);

    grid_item.addEventListener("click", () => {
      let speakThis = new SpeechSynthesisUtterance(ImageAndText.text);
      synth.speak(speakThis);
    });
  });
}

colapsibleDiv.addEventListener("click", () => {
  content.classList.toggle("active");

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
});
