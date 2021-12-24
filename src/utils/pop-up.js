import { reservationMovies, getReservations } from '../api/apiinvolveres.js';
import { getSpecificMovie } from '../api/movieData.js';

const modal = document.querySelector('#resmodal');
const closeButton = document.querySelector('#modalCloseButton');
const reservationForm = document.getElementById('reservation-form');
const reservationInput = document.getElementById('insights');
const nameInput = document.getElementById('name');

const onOpenReservationModal = (id) => {
  getSpecificMovie(id).then((item) => {
    document.body.style.overflow = 'hidden';
    const thumbnail = new Image();
    thumbnail.src = item.image.original;
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('thumbnail');
    const info1 = document.querySelector('.info1');
    const info2 = document.querySelector('.info2');
    const info3 = document.querySelector('.info3');
    const info4 = document.querySelector('.info4');
    const reservation = document.getElementById('reservations');
    const reservationTitle = document.querySelector('.reservations-title');
    modalImage.appendChild(thumbnail);
    modalTitle.innerText = item?.name;
    info1.innerHTML = `Language :${item.language}`;
    info2.innerHTML = `Rating :${item.rating.average}`;
    info3.innerHTML = `Status :${item.status}`;
    info4.innerHTML = `Run Time :${item.averageRuntime} min`;

    modal.style.display = 'block';
    getReservations(id).then((items) => {
      items.map((item) => {
        const reservationFormat = `<div class='reserve-row'>
        <span>${item.item_id}</span>
        <span>${item.date_start}</span>
        <span>${item.date_end}</span>
        <span>${item.username}:</span>
        </div>`;
        return reservation.insertAdjacentHTML('beforeend', reservationFormat);
      });
      reservationTitle.innerHTML = `reservations (${items.length})`;
    });

    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (nameInput.value && reservationInput.value) {
        try {
          reservationMovies(id, nameInput.value, reservationInput.value);
          nameInput.value = '';
          reservationInput.value = '';
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      }
    });
  });
};

closeButton.addEventListener('click', () => {
  document.body.style.overflow = 'visible';
  modal.style.display = 'none';
  window.location.reload();
});

export default onOpenReservationModal;
