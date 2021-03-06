const projectScreen = document.querySelector(".v2screen");
const infoWrap = document.querySelector(".infoWrap");
const projectSelect = document.querySelector(".v2projectSelect");
const _screen = document.querySelector(".test1");

const projects = [
  {
    name: "gcboard",
    url: "https://gcnomore.github.io/gcboard/",
  },
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

// Show project info when the title is clicked
projectSelect.addEventListener("click", (e) => {
  const infoName = e.target.className.slice(10);
  const infoChildren = Array.from(infoWrap.children);
  infoChildren.forEach((item) => {
    item.classList[0].slice(2) == `${infoName}Info` &&
      showInfo(infoChildren, item);
  });
  _screen.classList.remove("hidden");
  _screen.classList.add("expand");
});

infoWrap.addEventListener("click", (e) => {
  showProject(e);
});

const showInfo = (children, item) => {
  children.forEach((item) => {
    item.classList.add("fadeIn");
    item.classList.add("hide");
  });
  item.classList.remove("hide");
};

// Show project on iframe screen when show app is clicked
const showProject = (e) => {
  const targetProject = e.target.classList[0];
  const match = projects.filter((item) => {
    return targetProject === `see_${item.name}`;
  });

  if (targetProject.includes("see")) {
    const iconWrap = document.querySelector(`.v2${match[0].name}IconsWrap`);
    const iconChildren = Array.from(iconWrap.children);

    // Related icons animation
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
