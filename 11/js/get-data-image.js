import { renderingThumbnails } from './rendering-thumbnails';
import { renderPictures } from './image-viewer';


const getDataImage = async () => {
  const API_DATA = 'https://31.javascript.htmlacademy.pro/kekstagram/data';

  try {
    const response = await fetch(API_DATA);

    if(response.ok){
      const data = await response.json();

      renderingThumbnails(data);
      renderPictures(data);
    }
  } catch (error) {
    //console.error('Ошибка при получении данных:', error);
    const template = document.querySelector('#data-error').content.querySelector('.data-error');
    const templateElement = template.cloneNode(true);
    document.body.appendChild(templateElement);

    setTimeout(() => {
      templateElement.remove();
    }, 5000);
  }
};

export { getDataImage };
