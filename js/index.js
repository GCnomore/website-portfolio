const backdropLogo = document.querySelector(".backdropLogo");
const mainBackdrop = document.querySelector(".mainBackdrop");
const logo = document.querySelector(".logo");
const backgroundImg = document.querySelector(".backgroundImg");
const index_intro1 = document.querySelector(".intro1");
const index_intro2 = document.querySelector(".intro2");
const findMeWrap = document.querySelector(".findMeWrap");
const skipBtn = document.querySelector(".skipBtn");

const visit = localStorage.getItem("isaacchoiportfolio");

//loading animation
const showLoading = (skip) => {
  if (skip === "skip") {
    backgroundImg.classList.remove("hide", "bgFadeIn");
    mainBackdrop.classList.add("hide");
    index_intro1.classList.remove("hide", "fadeIn");
    index_intro2.classList.remove("hide", "fadeIn");
    findMeWrap.classList.remove("hidden", "fadeIn");
    logo.classList.remove("blinkIn", "hidden");
    setTimeout(() => {
      logo.classList.remove("blinkIn", "hidden");
    }, 8001);
    logo.classList.add("bounce");
    return;
  } else {
    setTimeout(() => {
      backdropLogo.setAttribute("src", "./img/logo.png");
    }, 3800);
    setTimeout(() => {
      mainBackdrop.classList.add("fadeOut");
    }, 4500);
    setTimeout(() => {
      mainBackdrop.classList.add("hide");
    }, 7388);
    setTimeout(() => {
      logo.classList.add("blinkIn");
      logo.classList.remove("hidden");
    }, 8000);
    setTimeout(() => {
      backgroundImg.classList.remove("hide");
      backgroundImg.classList.add("bgFadeIn");
    }, 5000);
    setTimeout(() => {
      index_intro1.classList.remove("hide");
      index_intro1.classList.add("fadeIn");
    }, 9000);
    setTimeout(() => {
      index_intro2.classList.remove("hide");
      index_intro2.classList.add("fadeIn");
    }, 10000);
    setTimeout(() => {
      findMeWrap.classList.remove("hidden");
      findMeWrap.classList.add("fadeIn");
      localStorage.setItem("isaacchoiportfolio", "1");
    }, 11000);
    visit && skipBtn.classList.remove("hide");
    setTimeout(() => {
      logo.classList.add("bounce");
    }, 12000);
    return;
  }
};

window.onload = () => {
  showLoading();
};

skipBtn.addEventListener("click", () => {
  showLoading("skip");
});

// Drop down menu - find me
const isaac = document.querySelector(".isaac");
const findIcons = document.querySelector(".findIconContSm");

const showDropDown = () => {
  findIcons.classList.toggle("hide");
};

isaac.addEventListener("click", showDropDown);
