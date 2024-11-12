import { BigPicture, PREVIEW_IMAGE } from './const.js';
import { closeModalWindow, openModalWindow } from './utils.js';
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


const eventTarget = (evt) => {
  const target = evt.target;

  if (target.closest('.social__comments-loader')){
    loadComments();

  }
  if (target.closest('.big-picture__cancel')){
    closeModalWindow(PREVIEW_IMAGE, BigPicture.PARENT_ELEMENT, eventTarget, handleKeydownEscape);

  }
};


function handleKeydownEscape (evt) {
  if (evt.key === 'Escape'){
    closeModalWindow(PREVIEW_IMAGE, BigPicture.PARENT_ELEMENT, eventTarget, handleKeydownEscape);
  }
}

const handlePictureClick = (evt, data) => {

  const target = evt.target.closest('.picture');
  //const getPhotoByIndex = getElementAtIndex(data);

  if (target) {
    evt.preventDefault();
    //const prewData = [...data]
    const pictureId = target.dataset.id;
    const prewData = data.find((item) => item.id === Number(pictureId));

    globalCommentsArray = prewData.comments;

    openModalWindow(PREVIEW_IMAGE, handleKeydownEscape);

    BigPicture.IMAGE.src = prewData.url;
    BigPicture.LIKES_COUNT.textContent = prewData.likes;
    BigPicture.TOTAL_COMMENTS_COUNT.textContent = globalCommentsArray.length;

    BigPicture.SOCIAL_CAPTION.textContent = prewData.description;
    currentCommentsCount = 0;
    loadComments();
  }
  BigPicture.PARENT_ELEMENT.addEventListener('click', eventTarget);

};

//const renderPictures = (data) => PICTURES.addEventListener('click', (evt) => handlePictureClick(evt, data));


export { handlePictureClick };
