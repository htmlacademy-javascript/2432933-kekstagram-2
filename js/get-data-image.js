import { renderingThumbnails } from './rendering-thumbnails.js';
import { renderPictures } from './image-viewer.js';
import { createPatternTemplate } from './utils.js';

const errorMessage = () => {
  const templateElement = createPatternTemplate('#data-error', '.data-error');
  document.body.appendChild(templateElement);

  setTimeout(() => {
    templateElement.remove();
  }, 5000);
};


const getDataImage = async () => {
  const API_DATA = 'https://31.javascript.htmlacademy.pro/kekstagram/data';

  try {
    const response = await fetch(API_DATA);

    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    renderingThumbnails(data);
    renderPictures(data);
  } catch (error) {
    //console.error('Ошибка при получении данных:', error);
    errorMessage();
  }
};

export { getDataImage };
