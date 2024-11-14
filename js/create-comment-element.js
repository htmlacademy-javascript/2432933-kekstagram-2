import { BigPicture } from './const.js';
import { createElement } from './utils.js';

const createComment = (comments) => {
  BigPicture.SOCIAL_COMMENTS_ELEMENT.replaceChildren();

  comments.forEach((comment) => {
    const socialCommentElement = createElement('li', 'social__comment');
    const socialPictureElement = createElement('img', 'social__picture');
    const socialTextElement = createElement('p', 'social__text');

    socialPictureElement.src = comment.avatar;
    socialPictureElement.alt = comment.name;
    socialPictureElement.width = BigPicture.IMAGE_WIDTH;
    socialPictureElement.height = BigPicture.IMAGE_HEIGHT;

    socialTextElement.textContent = comment.message;

    socialCommentElement.append(socialPictureElement, socialTextElement);

    BigPicture.SOCIAL_COMMENTS_ELEMENT.append(socialCommentElement);
  });
};

export { createComment };
