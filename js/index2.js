const projectScreen = document.querySelector(".v2screen");
const infoWrap = document.querySelector(".infoWrap");
const projectSelect = document.querySelector(".v2projectSelect");
const movieHunt = "https://moviehunt-gc.herokuapp.com/client/";
const pokeDex = "https://gcnomore.github.io/pokedex/";
const kokoaTalk = "https://github.com/GCnomore/chatApp";
const toDo = "https://gcnomore.github.io/todoApp/";
const watsPoppin = "https://gcnomore.github.io/watspoppin/";

window.document.addEventListener("click", (e) => {});

projectSelect.addEventListener("click", (e) => {
  const infoName = e.target.className.slice(10);
  const infoChildren = Array.from(infoWrap.children);
  infoChildren.forEach((item) => {
    item.classList[0].slice(2) == `${infoName}Info` &&
      showInfo(infoChildren, item);
  });
});

infoWrap.addEventListener("click", (e) => {
  showProject(e);
});

const showInfo = (children, item) => {
  console.log(children, item);
  children.forEach((item) => item.classList.add("hide"));
  item.classList.remove("hide");
};

const showProject = (e) => {
  const projectName = e.target.className;
  projectName == "see_movieHunt" &&
    projectScreen.setAttribute("src", movieHunt);
  projectName == "see_pokeDex" && projectScreen.setAttribute("src", pokeDex);
  projectName == "see_toDo" && projectScreen.setAttribute("src", toDo);
  projectName == "see_watsPoppin" &&
    projectScreen.setAttribute("src", watsPoppin);
};
