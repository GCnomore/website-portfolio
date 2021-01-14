const projectScreen = document.querySelector(".v2screen");
const movieHunt = "https://moviehunt-gc.herokuapp.com/client/";
const pokeDex = "https://gcnomore.github.io/pokedex/";
const kokoaTalk = "https://github.com/GCnomore/chatApp";
const toDo = "https://gcnomore.github.io/todoApp/";
const watsPoppin = "https://gcnomore.github.io/watspoppin/";

window.document.addEventListener("click", (e) => {
  const projectName = e.target.className.slice(10);
  projectName == "movieHunt" && projectScreen.setAttribute("src", movieHunt);
  projectName == "pokeDex" && projectScreen.setAttribute("src", pokeDex);
  projectName == "toDo" && projectScreen.setAttribute("src", toDo);
  projectName == "watsPoppin" && projectScreen.setAttribute("src", watsPoppin);
});
