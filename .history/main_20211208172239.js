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

console.log(window.speechSynthesis);
// setTimeout(() => {
//   console.log(window.speechSynthesis.getVoices());
// }, 10000);
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
    // console.log(option);
    option.textContent = Voices[i].name + " (" + Voices[i].lang + ")";
    if (Voices[i].default) {
      option.textContent += " -- DEFAULT";
    }
    option.setAttribute("data-lang", Voices[i].lang);
    option.setAttribute("data-name", Voices[i].name);
    voiceSelect.appendChild(option);
    // console.log(option);
    // option.setAttribute("")
  }

  console.log("arr0", arr);
});

Inputform.onsubmit = function (e) {
  e.preventDefault();
  // console.log("work?", arr);
  // console.log("VoicesArray", Voices);
  // console.log(textValue.value);
  let utterThis = new SpeechSynthesisUtterance(textValue.value);
  let selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === selectedOption) {
      utterThis.voice = arr[i];
      console.log(utterThis.voice);
    }
  }
  // utterThis.pitch = pitch.value;
  // utterThis.value = rate.value;
  synth.speak(utterThis);
};

// console.log("arr", arr);

// title.addEventListener("click", () => {
//   let utterThis = new SpeechSynthesisUtterance(title.innerHTML);

//   synth.speak(utterThis);
// });

// const ut = new SpeechSynthesisUtterance("No warning should arise");////
// speechSynthesis.speak(ut);////
// grid_item.innerHTML = "efjs";
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
