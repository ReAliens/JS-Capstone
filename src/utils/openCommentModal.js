import getData from '../api/movieData.js';

const modal = document.getElementById('modal');

const onOpenModal = (id) => {
  getData().then((items) => {
    document.body.style.overflow = 'hidden';
    const selectedModal = items.find((item) => item.id === Number(id));
    console.log(selectedModal);
 
  });
};

export default onOpenModal;
