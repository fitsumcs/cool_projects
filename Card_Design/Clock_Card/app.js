// dom
const month = document.querySelector('.month');
const Tday = document.querySelector('.Tday');
const Nday = document.querySelector('.Nday');
const year = document.querySelector('.year');

const lang = navigator.language;
const date = new Date();

// assign 
month.textContent = date.toLocaleString(lang, { month: 'long' });
Tday.textContent = date.toLocaleString(lang, { weekday: 'long' });
Nday.textContent = date.getDay();
year.textContent = date.getFullYear();