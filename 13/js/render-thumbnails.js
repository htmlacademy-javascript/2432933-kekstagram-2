import { createPatternTemplate} from './utils.js';
import { PICTURES } from './const.js';

const createPictureElement = (pictureData) => {
  const {url, description, likes = 0, comments = [], id} = pictureData;
  const pictureElement = createPatternTemplate('#picture', '.picture');

  pictureElement.dataset.id = id;
  const srcImage = pictureElement.querySelector('.picture__img');
  const likesElement = pictureElement.querySelector('.picture__likes');
  const commentsElement = pictureElement.querySelector('.picture__comments');

  srcImage.src = url;
  srcImage.alt = description;

  likesElement.textContent = likes;
  commentsElement.textContent = comments.length;

  return pictureElement;
};


const renderingThumbnails = (arr) => {
  const PICTURE_ELEMENT = PICTURES.querySelectorAll('.picture');
  PICTURE_ELEMENT.forEach((picture) => picture.remove());


  const fragment = document.createDocumentFragment();

  arr.forEach((element) => {

    const pictureElements = createPictureElement(element);
    fragment.append(pictureElements);
  });
  PICTURES.append(fragment);
};


export { renderingThumbnails };
