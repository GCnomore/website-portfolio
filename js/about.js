// Logo clicking effect
const logo = document.querySelector(".logo");
const body = document.querySelector("body");
const backdrop = document.querySelector(".profile_backdrop");

// Enable lightOn theme when logo clicked
const lightsOn = () => {
  backdrop.classList.toggle("hide");
};
logo.addEventListener("click", lightsOn);

// Drop down menu - find me
const isaac = document.querySelector(".isaac");
const findIcons = document.querySelector(".findIconContSm");

const showDropDown = () => {
  findIcons.classList.toggle("hide");
};
isaac.addEventListener("click", showDropDown);

// Star color animation
const skillLevel = document.querySelector(".skillLevel");
const stars = Array.from(document.querySelectorAll(".star_fill"));

skillLevel.addEventListener("mouseenter", () => {
  stars.forEach((star) => {
    star.classList.add("enlarge");
  });
});

skillLevel.addEventListener("mouseleave", () => {
  stars.forEach((star) => {
    star.classList.remove("enlarge");
  });
});
