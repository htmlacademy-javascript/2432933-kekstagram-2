import { TemplateElement } from './const.js';

const createPictureElement = (pictureData) => {
  const {url, description, likes = 0, comments = []} = pictureData;

  const pictureElement = TemplateElement.PICTURE.cloneNode(true);

  const srcImage = pictureElement.querySelector('.picture__img');
  const likesElement = pictureElement.querySelector('.picture__likes');
  const commentsElement = pictureElement.querySelector('.picture__comments');

  srcImage.src = url;
  srcImage.alt = description;

  likesElement.textContent = likes;
  commentsElement.textContent = comments.length;

  return pictureElement;
};

export { createPictureElement };
