import getData from './pokeData.js';

const container = document.querySelector('.container');
const displayData = () => {
  getData().then((items) => {
    const data = items.slice(0, 52);
    data.map((item) => {
      const pokeCard = document.createElement('div');
      const pokeImage = document.createElement('img');
      const pokeName = document.createElement('span');
      const infoContainer = document.createElement('div');
      const heartIcon = document.createElement('i');
      const likeNumber = document.createElement('span');
      const commentButton = document.createElement('button');
      const reserveButton = document.createElement('button');

      pokeCard.className = 'card';
      infoContainer.className = 'info-container';
      pokeImage.className = 'poke--image';
      pokeImage.src = item?.image?.original;
      pokeImage.style.objectFit = 'fill';
      pokeImage.style.height = '100%';
      pokeImage.style.width = '100%';
      pokeImage.alt = 'pokemon-Image';
      pokeName.className = 'poke-name';
      pokeName.innerHTML = item?.name;
      heartIcon.className = 'fa fa-heart';
      likeNumber.className = 'like-span';
      likeNumber.innerHTML = '5 Likes';
      commentButton.className = 'comment-button';
      commentButton.innerHTML = 'Comments';
      reserveButton.className = 'reserve-button';
      reserveButton.innerHTML = 'Reservation';

      infoContainer.append(heartIcon, pokeName, likeNumber);

      pokeCard.append(pokeImage, infoContainer, commentButton, reserveButton);
      return container.appendChild(pokeCard);
    });
  });
};

export default displayData;
