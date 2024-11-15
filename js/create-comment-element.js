import { bigPicture } from './const.js';
import { createElement } from './utils.js';

const createComment = (comments) => {
  bigPicture.socialCommentsElement.replaceChildren();

  comments.forEach((comment) => {
    const socialCommentElement = createElement('li', 'social__comment');
    const socialPictureElement = createElement('img', 'social__picture');
    const socialTextElement = createElement('p', 'social__text');

    socialPictureElement.src = comment.avatar;
    socialPictureElement.alt = comment.name;
    socialPictureElement.width = bigPicture.IMAGE_WIDTH;
    socialPictureElement.height = bigPicture.IMAGE_HEIGHT;

    socialTextElement.textContent = comment.message;

    socialCommentElement.append(socialPictureElement, socialTextElement);

    bigPicture.socialCommentsElement.append(socialCommentElement);
  });
};

export { createComment };
