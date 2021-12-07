//ok what are we building(I DONT KNOW DUDE)
//make a array with the image and label so that we can loop them with for loop and append to grid item div class
let gridContainer = document.querySelector(".gridContainer");
const title = document.querySelector(".title");
// console.log(title);

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
  console.log("arr0", arr);
});
console.log("arr", arr);

title.addEventListener("click", () => {
  let utterThis = new SpeechSynthesisUtterance(title.innerHTML);
  utterThis.voice = arr[1].name + " (" + voices[1].lang + ")";
  console.log("efsef", utterThis.voice);
  // utterThis.voice = arr[]
});
// grid_item.innerHTML = "efjs";
function startFunction() {
  ImagesAndTexts.forEach((ImageAndText) => {
    let grid_item = document.createElement("div");
    grid_item.classList.add("grid-item");

    grid_item.innerHTML = `
        <img src="./assets/${ImageAndText.image}" class="imgClass"/>
        <h1 class="labelForSpeech" >${ImageAndText.text.toUpperCase()}</div>
    `;

    gridContainer.appendChild(grid_item);
  });
}
