import { BigPicture } from './const.js';
import { createElement } from './utils.js';

const createComment = (comments) => {
  BigPicture.SOCIAL_COMMENTS.replaceChildren();

  comments.forEach((comment) => {
    const socialComment = createElement('li', 'social__comment');
    const socialPicture = createElement('img', 'social__picture');
    const socialText = createElement('p', 'social__text');

    socialPicture.src = comment.avatar;
    socialPicture.alt = comment.name;
    socialPicture.width = BigPicture.IMAGE_WIDTH;
    socialPicture.height = BigPicture.IMAGE_HEIGHT;

    socialText.textContent = comment.message;

    socialComment.append(socialPicture, socialText);

    BigPicture.SOCIAL_COMMENTS.append(socialComment);
  });
};

export { createComment };
