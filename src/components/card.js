const movieCard = ({ item, likes }) => {
  const { image, id } = item;
  const movieLikes = likes.find((like) => like.item_id === id);

  return `<div class="card">
      <img src=${image?.original} class="movie-image" alt="cover"/>
      <div class="info-container">
      <i class="fa fa-heart"></i>
     <span class="like-span">${movieLikes ? movieLikes.likes : 0}</span>
      </div>
      <button class="comment-button">Comment</button>
      <button id="view" data-modal=${id} type="button" class="viewButton">See Project</button>
      </div>`;
};

export default movieCard;
