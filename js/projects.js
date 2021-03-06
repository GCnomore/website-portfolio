const projects = [
  ["pokeSlideCont", "pokedexSlide"],
  ["movieSlideCont", "moviehuntSlide"],
  ["todoSlideCont", "todoSlide"],
  ["watspoppinSlideCont", "watspoppinSlide"],
  ["kokoatalkSlideCont", "kokoatalkSlide"],
  ["gcboardSlideCont", "gcboardSlide"],
];

const slide = (project) => {
  const wrap = document.querySelector(`.${project[0]}`);
  const activeSlide = document.querySelector(`.${project[1]}`);
  if (activeSlide) {
    activeSlide.classList.remove("active", project[1]);
    const nextSlide = activeSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add("active", project[1]);
    } else {
      wrap.firstElementChild.classList.add("active", project[1]);
    }
  } else {
    wrap.firstElementChild.classList.add("active", project[1]);
  }
};

setInterval(() => {
  projects.map((item) => slide(item));
}, 3000);

// Sort by
const icons = document.querySelector(".projects_iconsWrap");
const javascript = document.querySelector(".javascript");
const jquery = document.querySelector(".jquery");
const react = document.querySelector(".react");
const nodejs = document.querySelector(".nodejs");
const mongodb = document.querySelector(".mongodb");
const vue = document.querySelector(".vue");
const angular = document.querySelector(".angular");
const clearBtn = document.querySelector(".clearBtn");

const getSiblings = (element) => {
  const allSiblings = Array.from(element.parentNode.children);
  const siblings = allSiblings.filter((sibling) => sibling !== element);
  return siblings;
};

const sortBy = (element) => {
  // Get selected element icon's siblings and give them lower opacity
  getSiblings(element).forEach((item) =>
    item.setAttribute("style", "opacity: 0.2")
  );
  // Give selected element normal opacity
  element.setAttribute("style", "opacity: 1");

  const allProjects = Array.from(
    document.querySelector(".projectsContainer").children
  );
  allProjects.forEach((item) => item.classList.remove("hide"));

  // Get tagged projects into an array with their class name
  const taggedProjects = Array.from(
    document.querySelectorAll(`.${element.className}`)
  ).filter((item) => item !== element);

  // Compare difference between all projects vs tagged projects and return the difference
  const untagged = allProjects.filter((item) => !taggedProjects.includes(item));

  untagged.forEach((item) => item.classList.add("hide"));
};

const clearSort = () => {
  Array.from(
    document.querySelector(".projectsContainer").children
  ).forEach((item) => item.classList.remove("hide"));
  Array.from(icons.children).forEach((item) =>
    item.setAttribute("style", "opacity:1")
  );
};

javascript.addEventListener("click", () => sortBy(javascript));
jquery.addEventListener("click", () => sortBy(jquery));
react.addEventListener("click", () => sortBy(react));
nodejs.addEventListener("click", () => sortBy(nodejs));
mongodb.addEventListener("click", () => sortBy(mongodb));
vue.addEventListener("click", () => sortBy(vue));
// angular.addEventListener('click', () => sortBy(angular));
clearBtn.addEventListener("click", clearSort);

// Logo clicking effect
const logo = document.querySelector(".logo");
const body = document.querySelector("body");
const nav = document.querySelector(".projects_nav");

// Drop down menu - find me
const isaac = document.querySelector(".isaac");
const findIcons = document.querySelector(".findIconContSm");

const showDropDown = () => {
  findIcons.classList.toggle("hide");
};

isaac.addEventListener("click", showDropDown);

// Restrict screen size smaller than 1024px to access version2 page
const modal = document.querySelector(".modalBackdrop");
const logoWrap = document.querySelector(".logoWrap");

modal.addEventListener("click", () => {
  modal.classList.add("hide");
});

logo.addEventListener("click", () => {
  if (screen.availWidth > 1023) {
    console.log("ok");
    logoWrap.setAttribute("href", "./index2.html");
  } else {
    modal.classList.remove("hide");
    window.scrollTo(0, 0);
  }
});
