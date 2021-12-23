const url1 = 'https://api.tvmaze.com/shows';
const commentsEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8v2YvLQLsPQiil6nHJBM/comments';
const popup = document.querySelector('.movie-popup');

const get = (url) => fetch(url)
  .then((res) => res.json())
  .then((data) => data)
  .then((error) => error);
const fetchMovieData = async (movieId) => {
  const response = await get(`${url1}/${movieId}`);
  return response;
};
const fetchMovieComments = async (movieId) => {
  const response = await get(`${commentsEndpoint}?item_id=${movieId}`);
  return response;
};
const displayMovieComments = (data) => {
  popup.querySelector('.comments').innerHTML = data;
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
      Comments (<span class="total-comments">0</span>)
      </h3>
      <ul class="comments">
        fetching comments...
      </ul>
      `;
    enableClosePopup();
    fetchMovieComments().then((data) => {
      if (!data.error) {
        let comments = '';
        data.forEach((comment) => {
          comments += `<li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>`;
        });
        displayMovieComments(comments);
      } else {
        displayMovieComments('Be the first person to comment...');
      }
    });
  });
  popup.style.display = 'block';
  enableClosePopup();
};
const enableComments = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((movie) => {
    movie.addEventListener('click', () => {
      const movieId = movie.getAttribute('movie_id');
      displayMoviePopup(movieId);
    });
  });
};
export default enableComments;