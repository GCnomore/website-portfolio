const projectScreen = document.querySelector(".v2screen");
const infoWrap = document.querySelector(".infoWrap");
const projectSelect = document.querySelector(".v2projectSelect");

const projects = [
  {
    name: "movieHunt",
    url: "https://moviehunt-gc.herokuapp.com/client/",
  },
  {
    name: "pokeDex",
    url: "https://gcnomore.github.io/pokedex/",
  },
  {
    name: "kokoaTalk",
    url: "https://github.com/GCnomore/chatApp",
  },
  {
    name: "toDo",
    url: "https://gcnomore.github.io/todoApp/",
  },
  {
    name: "watsPoppin",
    url: "https://gcnomore.github.io/watspoppin/",
  },
];

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
  const targetProject = e.target.className;
  const match = projects.filter((item) => {
    return targetProject === `see_${item.name}`;
  });

  if (targetProject.includes("see")) {
    const iconWrap = document.querySelector(`.v2${match[0].name}IconsWrap`);
    const iconChildren = Array.from(iconWrap.children);

    iconChildren.forEach((item, index) => {
      item.classList.remove("build");
      projectScreen.removeAttribute("src");
      setTimeout(() => {
        item.classList.add("build");
      }, 0 + index * 200);
    });
    setTimeout(() => {
      projectScreen.setAttribute("src", match[0].url);
    }, 2500);
  }
};
