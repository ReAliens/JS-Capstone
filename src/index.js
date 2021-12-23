import './styles.css';
import displayData from './utils/displayData.js';
import icon from './images/pokemon.png';
import './utils/pop-up.js'


const logo = document.querySelector(".Pokemon-logo");
const myIcon = new Image();
myIcon.src = icon;
logo.appendChild(myIcon);
window.onload = displayData;

