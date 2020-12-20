// Logo clicking effect
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const lightsOn = () => {
  body.classList.toggle('lightsOn');
};

logo.addEventListener('click', lightsOn);

// Drop down menu - find me
const findMe = document.querySelector('.findMeWrapSm');
const findIcons = document.querySelector('.findIconContSm');

const showDropDown = () => {
  findIcons.classList.toggle('hide');
};

findMe.addEventListener('click', showDropDown);
