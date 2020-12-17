// Logo clicking effect
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const lightsOn = () => {
  body.classList.toggle('lightsOn');
};

logo.addEventListener('click', lightsOn);
