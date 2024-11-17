import { renderingThumbnails } from './render-thumbnails.js';
import { createPatternTemplate, debounce } from './utils.js';
import { onPictureClick } from './image-viewer.js';
import { picturesElement, API } from './const.js';
import { createFilters, filterClickHandler } from './filter-function.js';


const DELAY_DELETE_TEMPLATE = 5000;
const RERENDER_DELAY = 500;

const imageFilterElement = document.querySelector('.img-filters');
const imageFormElement = imageFilterElement.querySelector('.img-filters__form');

let globalData = [];

const showErrorMessage = () => {
  const templateElement = createPatternTemplate('#data-error', '.data-error');
  document.body.appendChild(templateElement);

  setTimeout(() => {
    templateElement.remove();
  }, DELAY_DELETE_TEMPLATE);
};


const getDataImage = async () => {
  try {
    const response = await fetch(API.GET_DATA);
    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    globalData = data;
    imageFilterElement.classList.remove('img-filters--inactive');
    renderingThumbnails(globalData);

    const filters = createFilters(globalData);
    imageFormElement.addEventListener('click', debounce(filterClickHandler(filters), RERENDER_DELAY));
  } catch (error) {
    showErrorMessage ();
  }
};

picturesElement.addEventListener('click', (evt) => onPictureClick(evt, globalData));


export { getDataImage };


