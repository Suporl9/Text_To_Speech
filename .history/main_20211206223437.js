//ok what are we building(I DONT KNOW DUDE)
//make a array with the image and label so that we can loop them with for loop and append to grid item div class
let gridContainer = document.querySelector(".gridContainer");

const ImagesAndTexts = [
  {
    image: "angry.jpeg",
    text: "i am angry",
  },
  {
    image: "bathroom.jpg",
    text: "i am angry",
  },
  {
    image: "happy.jpg",
    text: "i am happy",
  },
  {
    image: "hungry.jpg",
    text: "i am hungry",
  },
  {
    image: "hurt.jpg",
    text: "i am hurt",
  },
  {
    image: "play.jpeg",
    text: "i am angry",
  },
  {
    image: "sad.jpg",
    text: "i am sad",
  },
  {
    image: "scared.png",
    text: "i am scared",
  },
  {
    image: "sleepy.jpg",
    text: "i am sleepy",
  },
];

// grid_item.innerHTML = "efjs";
function startFunction() {
  //   console.log("fekj");
  //   grid_item.innerHTML = "booyah";

  gridContainer.appendChild(grid_item);

  ImagesAndTexts.forEach((ImageAndText) => {
    let grid_item = document.createElement("div");
    grid_item.classList.add("grid-item");
  });
}
