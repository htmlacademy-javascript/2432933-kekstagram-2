import { renderingThumbnails } from './render-thumbnails.js';
import { createPatternTemplate, debounce } from './utils.js';
import { onPictureClick } from './image-viewer.js';
import { PICTURES_ELEMENT } from './const.js';
import { createFilters, filterClickHandler } from './filter-function.js';


const IMAGE_FILTER_ELEMENT = document.querySelector('.img-filters');
const IMAGE_FORM_ELEMENT = IMAGE_FILTER_ELEMENT.querySelector('.img-filters__form');

const API_DATA = 'https://32.javascript.htmlacademy.pro/kekstagram/data';
const DELAY_DELETE_TEMPLATE = 5000;
const RERENDER_DELAY = 500;

let globalData = [];

const errorMessage = () => {
  const templateElement = createPatternTemplate('#data-error', '.data-error');
  document.body.appendChild(templateElement);

  setTimeout(() => {
    templateElement.remove();
  }, DELAY_DELETE_TEMPLATE);
};


const getDataImage = async () => {
  try {
    const response = await fetch(API_DATA);
    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    globalData = data;
    IMAGE_FILTER_ELEMENT.classList.remove('img-filters--inactive');
    renderingThumbnails(globalData);

    const filters = createFilters(globalData);
    IMAGE_FORM_ELEMENT.addEventListener('click', debounce(filterClickHandler(filters), RERENDER_DELAY));
  } catch (error) {
    errorMessage();
  }
};

PICTURES_ELEMENT.addEventListener('click', (evt) => onPictureClick(evt, globalData));


export { getDataImage };


