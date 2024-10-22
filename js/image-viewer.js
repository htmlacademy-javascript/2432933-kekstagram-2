import { BigPicture } from './const.js';
import { PHOTOS } from './create-photo.js';
import { createElement, getElementAtIndex } from './utils.js';

let globalCommentsArray = [];
let currentCommentsCount = 0;

const closeModal = () => {
  BigPicture.PREWIE_IMAGE.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const createComment = (comments) => {
  BigPicture.SOCIAL_COMMENTS.replaceChildren();

  comments.forEach((comment) => {
    const socialComment = createElement('li', 'social__comment');
    const socialPicture = createElement('img', 'social__picture');
    const socialText = createElement('p', 'social__text');

    socialPicture.src = comment.avatar;
    socialPicture.alt = comment.name;
    socialPicture.width = 35;
    socialPicture.height = 35;

    socialText.textContent = comment.message;

    socialComment.append(socialPicture, socialText);

    BigPicture.SOCIAL_COMMENTS.append(socialComment);
  });
};


const loadComments = () => {
  const STEP_CLICK = 5;
  const commentsToShow = globalCommentsArray.slice(0, currentCommentsCount + STEP_CLICK);

  createComment(commentsToShow);

  currentCommentsCount = commentsToShow.length;
  BigPicture.SHOW_COMMENTS_COUNT.textContent = currentCommentsCount;

  const shouldHide = currentCommentsCount >= globalCommentsArray.length;
  BigPicture.COMMENTS_LOADER.classList.toggle('hidden', shouldHide);
};

const renderPictures = (evt) =>{
  evt.preventDefault();
  const target = evt.target.closest('.picture');
  const getPhotoByIndex = getElementAtIndex(PHOTOS);

  if (target) {
    const index = target.dataset.index;
    const prewData = getPhotoByIndex(index);
    globalCommentsArray = prewData.comments;

    BigPicture.PREWIE_IMAGE.classList.remove('hidden');
    document.body.classList.add('modal-open');

    BigPicture.IMAGE.src = prewData.url;
    BigPicture.LIKES_COUNT.textContent = prewData.likes;

    BigPicture.TOTAL_COMMENTS_COUNT.textContent = globalCommentsArray.length;

    BigPicture.SOCIAL_CAPTION.textContent = prewData.description;
    currentCommentsCount = 0;
    loadComments();
  }

};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeModal();
  }
});

BigPicture.PARENT_ELEMENT.addEventListener('click', (evt) => {
  const target = evt.target;

  if (target.closest('.social__comments-loader')){
    loadComments();
  }
  if (target.closest('.big-picture__cancel')){
    closeModal();
  }
});


export {renderPictures};

