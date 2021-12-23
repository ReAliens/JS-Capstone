import './styles.css';
import displayData from './utils/displayData.js';
import icon from './images/pokemon.png';
import popCard from './utils/pop-up.js'
import reserveButton from "./utils/displayData.js";
import getData from './utils/pokeData.js';

const logo = document.querySelector(".Pokemon-logo");
const myIcon = new Image();
myIcon.src = icon;
logo.appendChild(myIcon);
// window.onload = displayData;

const renderUI = async () => {
  await displayData();
  const data = await getData();
  const reservationButtons = document.querySelectorAll(".reserve-button");
  reservationButtons.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const pop = document.querySelector("#popup");
      const current = data.find((item) => item.id === parseInt(e.target.id));
      await popCard(current);
      pop.style.display = "block"; // to show reservation modal
      // if (
      //   btn.id === `x-${e.target.classList[1]}` ||
      //   btn.id === `x-${e.target.classList[2]}`
      // ) {
      //   const pop = document.querySelector("#popup");
      //   pop.classList.toggle("active");
      //   const cards = document.querySelectorAll(`.c-${btn.id}`);
      //   cards.forEach((item) => {
      //     item.classList.toggle("hidden");
      //   });
      // }
    });
  });
  // const clsBtns1 = document.querySelectorAll(".x");
  // clsBtns1.forEach((clsBtn) => {
  //   clsBtn.addEventListener("click", async () => {
  //     const cards = document.querySelectorAll(`.${clsBtn.classList[1]}`);
  //     const pop = document.querySelector("#popup");
  //     pop.classList.toggle("active");
  //     cards.forEach((card) => {
  //       card.classList.toggle("hidden");
  //     });
  //   });
  // });
};

renderUI();