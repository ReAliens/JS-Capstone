import { getLikesNumber } from '../api/apiInvolve.js';
import getData from '../api/movieData.js';
import movieCard from '../components/card.js';

const container = document.querySelector('.container');

const displayData = () => {
  getData().then((items) => {
    getLikesNumber().then((likes) => {
      items.forEach((item) => {
        container.innerHTML += movieCard({ item, likes });
      });
    });
  });
};

export default displayData;
