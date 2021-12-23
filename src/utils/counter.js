const countermovie = (data, movieCategory, menuTarget) => {
    if (data.length && movieCategory) {
      menuTarget.textContent = `${movieCategory} (${data.length})`;
      return true;
    }
    return false;
  };
  
  const commentsCounter = (comments) => (comments.length ? comments.length : 0);
  
  export { countermovie, commentsCounter };