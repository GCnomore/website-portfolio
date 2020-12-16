const backdropLogo = document.querySelector('.backdropLogo');
const mainBackdrop = document.querySelector('.mainBackdrop');
const logo = document.querySelector('.logo');
const backgroundImg = document.querySelector('.backgroundImg');
const index_intro1 = document.querySelector('.intro1');
const index_intro2 = document.querySelector('.intro2');
const footer = document.querySelector('.footer');
const skipBtn = document.querySelector('.skipBtn');

const visit = localStorage.getItem('isaacchoiportfolio');

//loading animation
const showLoading = (skip) => {
  if (skip === 'skip') {
    backgroundImg.classList.remove('hide', 'bgFadeIn');
    mainBackdrop.classList.add('hide');
    index_intro1.classList.remove('hide', 'fadeIn');
    index_intro2.classList.remove('hide', 'fadeIn');
    footer.classList.remove('hide', 'fadeIn');
    return;
  } else {
    setTimeout(() => {
      backdropLogo.setAttribute('src', './img/logo.png');
    }, 3800);
    setTimeout(() => {
      mainBackdrop.classList.add('fadeOut');
    }, 4500);
    setTimeout(() => {
      mainBackdrop.classList.add('hide');
    }, 7388);
    setTimeout(() => {
      logo.classList.add('blinkIn');
      logo.classList.remove('hidden');
    }, 8000);
    setTimeout(() => {
      backgroundImg.classList.remove('hide');
      backgroundImg.classList.add('bgFadeIn');
    }, 5000);
    setTimeout(() => {
      index_intro1.classList.remove('hide');
      index_intro1.classList.add('fadeIn');
    }, 9000);
    setTimeout(() => {
      index_intro2.classList.remove('hide');
      index_intro2.classList.add('fadeIn');
    }, 10000);
    setTimeout(() => {
      footer.classList.remove('hide');
      footer.classList.add('fadeIn');
      localStorage.setItem('isaacchoiportfolio', '1');
    }, 11000);
    visit && skipBtn.classList.remove('hide');
    return;
  }
};

window.onload = () => {
  showLoading();
};

skipBtn.addEventListener('click', () => {
  showLoading('skip');
});