const themeOnOf = document.querySelector('.remover-classe')
const lightmode = document.querySelector('.light-mode');
const darkmode = document.querySelector('.dark-mode');
const body = document.querySelector('body');

lightmode.addEventListener('click', (event) => {
  event.preventDefault();
  lightToDark();
  darkMode();
});

function lightToDark() {
  body.style.background = '#292C35';
};

function darkMode() {
  darkmode
    .classList
    .toggle("dark-mode");
  
  themeOnOf
    .classList
    .add('dark-mode')
};

darkmode.addEventListener('click', (event) => {
  event.preventDefault();
  darkToLight();
  lightMode(); 
});

function darkToLight() {
  body.style.background = '#F1F1F1';
};

function lightMode() {
  themeOnOf
  .classList
  .remove('dark-mode')
}