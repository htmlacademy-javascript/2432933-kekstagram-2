import { BigPicture, PREVIEW_IMAGE_ELEMENT } from './const.js';
import { closeModalWindow, openModalWindow } from './utils.js';
import { createComment } from './create-comment-element.js';

let globalCommentsArray = [];
let currentCommentsCount = 0;

const onLoadComments = () => {
  const STEP_CLICK = 5;
  const commentsToShow = globalCommentsArray.slice(0, currentCommentsCount + STEP_CLICK);

  createComment(commentsToShow);

  currentCommentsCount = commentsToShow.length;
  BigPicture.SHOW_COMMENTS_COUNT_ELEMENT.textContent = currentCommentsCount;

  const shouldHide = currentCommentsCount >= globalCommentsArray.length;
  BigPicture.COMMENTS_LOADER_ELEMENT.classList.toggle('hidden', shouldHide);
};

const eventTargetBigPicture = (evt) => {
  const target = evt.target;

  if (target.closest('.social__comments-loader')){
    onLoadComments();

  }
  if (target.closest('.big-picture__cancel')){
    closeModalWindow(PREVIEW_IMAGE_ELEMENT, BigPicture.BIG_PREVIEW_ELEMENT, eventTargetBigPicture, onKeydownEscape);
  }
};

function onKeydownEscape(evt) {
  if (evt.key === 'Escape'){
    closeModalWindow(PREVIEW_IMAGE_ELEMENT, BigPicture.BIG_PREVIEW_ELEMENT, eventTargetBigPicture, onKeydownEscape);
  }
}

const onPictureClick = (evt, data) => {
  const target = evt.target.closest('.picture');
  const cloneData = [...data];

  if (target) {
    evt.preventDefault();

    const pictureId = target.dataset.id;
    const prewData = cloneData.find((item) => item.id === Number(pictureId));

    globalCommentsArray = prewData.comments;

    openModalWindow(PREVIEW_IMAGE_ELEMENT, onKeydownEscape);

    BigPicture.IMAGE_ELEMENT.src = prewData.url;
    BigPicture.LIKES_COUNT_ELEMENT.textContent = prewData.likes;
    BigPicture.TOTAL_COMMENTS_COUNT_ELEMENT.textContent = globalCommentsArray.length;

    BigPicture.SOCIAL_CAPTION_ELEMENT.textContent = prewData.description;
    currentCommentsCount = 0;
    onLoadComments();
  }
  BigPicture.BIG_PREVIEW_ELEMENT.addEventListener('click', eventTargetBigPicture);

};


export { onPictureClick };
