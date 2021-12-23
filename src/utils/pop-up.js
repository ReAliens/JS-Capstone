

const url1 = 'https://api.tvmaze.com/shows';
const reservationsEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8v2YvLQLsPQiil6nHJBM/reservations';
const popup = document.querySelector('.movie-popup');

const get = (url) => fetch(url)
  .then((res) => res.json())
  .then((data) => data)
  .then((error) => error);
const fetchMovieData = async (movieId) => {
  const response = await get(`${url1}/${movieId}`);
  return response;
};
const fetchMovieReservations = async (movieId) => {
  const response = await get(`${reservationEndpoint}?item_id=${movieId}`);
  return response;
};
const displayMovieReservations = (data) => {
  popup.querySelector('.reservations').innerHTML = data;
};
const enableClosePopup = () => {
  document.querySelector('#close-popup').addEventListener('click', () => {
    popup.style.display = 'none';
    popup.innerHTML = '';
  });
};
  const displayMoviePopup = (movieId) => {
  popup.innerHTML = `Fetching data...<br>
    <span id="close-popup">X</span>`;
  fetchMovieData(movieId).then((data) => {
    popup.innerHTML = `
      <span id="close-popup">X</span>
      <img src="${data.image.medium}" class="popup-img">
      <h3 class="popup-title">${data.name}</h3>
      <table>
        <tr>
          <td>
            <b>premiered:</b> ${data.premiered}
          </td>
          <td>
            <b>Ended:</b> ${data.ended}
          </td>
        </tr>
        <tr>
          <td>
            <b>Language:</b> ${data.language}
          </td>
          <td>
            <b>Type:</b> ${data.type}
          </td>
        </tr>
      </table>
      <h3>
      reservations (<span class="total-reservations">0</span>)
      </h3>
      <ul class="reservation">
        fetching reservations...
      </ul>
      `;
    enableClosePopup();
    fetchMovieReservations().then((data) => {
      if (!data.error) {
        let reservations = '';
        data.forEach((reservation) => {
          reservations += `<li>${reservation.creation_date} ${reservation.username}: ${reservation.reservation}</li>`;
        });
        displayMovieReservations(reservations);
      } else {
        displayMovieReservations('Be the first person to reservation...');
      }
    });
  });
  popup.style.display = 'block';
  enableClosePopup();
};
const enablereservations = () => {
  const reservationBtns = document.querySelectorAll('.reservation-btn');
  reservationBtns.forEach((movie) => {
    movie.addEventListener('click', () => {
      const movieId = movie.getAttribute('movie_id');
      displayMoviePopup(movieId);
    });
  });
};
export default enablereservations;