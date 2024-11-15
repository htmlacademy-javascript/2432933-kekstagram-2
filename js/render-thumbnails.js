import { createPatternTemplate} from './utils.js';
import { picturesElement } from './const.js';

const createPictureElement = (pictureData) => {
  const {url, description, likes = 0, comments = [], id} = pictureData;
  const pictureElement = createPatternTemplate('#picture', '.picture');

  pictureElement.dataset.id = id;
  const srcImageElement = pictureElement.querySelector('.picture__img');
  const likesElement = pictureElement.querySelector('.picture__likes');
  const commentsElement = pictureElement.querySelector('.picture__comments');

  srcImageElement.src = url;
  srcImageElement.alt = description;

  likesElement.textContent = likes;
  commentsElement.textContent = comments.length;

  return pictureElement;
};


const renderingThumbnails = (arrays) => {
  const PICTURE_ELEMENT = picturesElement.querySelectorAll('.picture');
  PICTURE_ELEMENT.forEach((picture) => picture.remove());


  const fragment = document.createDocumentFragment();

  arrays.forEach((element) => {

    const pictureElement = createPictureElement(element);
    fragment.append(pictureElement);
  });
  picturesElement.append(fragment);
};


export { renderingThumbnails };
