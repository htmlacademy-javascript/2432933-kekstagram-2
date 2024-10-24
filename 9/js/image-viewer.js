import { BigPicture } from './const.js';
import { PHOTOS } from './create-photo.js';
import { getElementAtIndex, toggleModal } from './utils.js';
import { BoxPicture } from './const.js';
import { createComment } from './create-comment-element.js';

let globalCommentsArray = [];
let currentCommentsCount = 0;

const loadComments = () => {
  const STEP_CLICK = 5;
  const commentsToShow = globalCommentsArray.slice(0, currentCommentsCount + STEP_CLICK);

  createComment(commentsToShow);

  currentCommentsCount = commentsToShow.length;
  BigPicture.SHOW_COMMENTS_COUNT.textContent = currentCommentsCount;

  const shouldHide = currentCommentsCount >= globalCommentsArray.length;
  BigPicture.COMMENTS_LOADER.classList.toggle('hidden', shouldHide);
};

const handlePictureClick = (evt) => {
  evt.preventDefault();
  const target = evt.target.closest('.picture');
  const getPhotoByIndex = getElementAtIndex(PHOTOS);

  if (target) {
    const index = target.dataset.index;
    const prewData = getPhotoByIndex(index);
    globalCommentsArray = prewData.comments;

    toggleModal(BigPicture.PREWIE_IMAGE, true);

    BigPicture.IMAGE.src = prewData.url;
    BigPicture.LIKES_COUNT.textContent = prewData.likes;

    BigPicture.TOTAL_COMMENTS_COUNT.textContent = globalCommentsArray.length;

    BigPicture.SOCIAL_CAPTION.textContent = prewData.description;
    currentCommentsCount = 0;
    loadComments();
  }
};

const renderPictures = () => BoxPicture.PICTURES.addEventListener('click', handlePictureClick);


const closePicture = () => toggleModal(BigPicture.PREWIE_IMAGE, false);


document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closePicture();
  }
});

BigPicture.PARENT_ELEMENT.addEventListener('click', (evt) => {
  const target = evt.target;

  if (target.closest('.social__comments-loader')){
    loadComments();
  }
  if (target.closest('.big-picture__cancel')){
    closePicture();
  }
});


export {renderPictures};
