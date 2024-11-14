import { renderingThumbnails } from './render-thumbnails.js';

const IMAGE_FORM = document.querySelector('.img-filters__form');
const FILTERS_BUTTONS = IMAGE_FORM.querySelectorAll('.img-filters__button');
const COUNT = 10;

const createFilters = (data) => {
  const randomPicture = () => data.slice(0, COUNT).sort(() => 0.5 - Math.random());
  const discussed = () => data.slice().sort((min, max) => max.comments.length - min.comments.length);

  return {
    'filter-random'    : () => renderingThumbnails(randomPicture()),
    'filter-discussed' : () => renderingThumbnails(discussed()),
    'filter-default'   : () => renderingThumbnails((data)),
  };
};

const toggleActiveClass = (target) => {
  FILTERS_BUTTONS.forEach((button) => button.classList.toggle('img-filters__button--active', button === target));
};

const filterClickHandler = (filters) => (evt) => {
  const target = evt.target.closest('.img-filters__button');
  if (target) {
    const filterId = target.id;
    toggleActiveClass(target);

    const filter = filters[filterId];
    if (filter) {
      filter();
    }
  }
};


export { createFilters, filterClickHandler };
