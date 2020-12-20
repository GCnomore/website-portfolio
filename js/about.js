// Logo clicking effect
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const lightsOn = () => {
  body.classList.toggle('lightsOn');
};

logo.addEventListener('click', lightsOn);

// Drop down menu - find me
const isaac = document.querySelector('.isaac');
const findIcons = document.querySelector('.findIconContSm');

const showDropDown = () => {
  findIcons.classList.toggle('hide');
};

isaac.addEventListener('click', showDropDown);
