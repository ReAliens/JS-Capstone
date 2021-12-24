import { reservationMovies, getReservations } from '../api/apiinvolveres.js';
import { getSpecificMovie } from '../api/movieData.js';

const modal = document.querySelector('#resmodal');
const closeButton = document.querySelector("#res-modalCloseButton");
const reservationForm = document.getElementById('reservation-form');
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");
const nameInput = document.getElementById('name');

const onOpenReservationModal = (id) => {
  getSpecificMovie(id).then((item) => {
    document.body.style.overflow = 'hidden';
    const thumbnail = new Image();
    thumbnail.src = item.image.original;
    const modalTitle = document.getElementById("res-modalTitle");
    const modalImage = document.getElementById("res-thumbnail");
    const info1 = document.querySelector(".res-info1");
    const info2 = document.querySelector(".res-info2");
    const info3 = document.querySelector(".res-info3");
    const info4 = document.querySelector(".res-info4");
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
      if (nameInput.value && startDateInput.value && endDateInput.value) {
        try {
          reservationMovies(
            id,
            nameInput.value,
            startDateInput,
            endDateInput.value
          );
          nameInput.value = "";
          startDateInput.value = "";
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
