import { bigPicture, previewImageElement } from './const.js';
import { toggleModal } from './utils.js';
import { createComment } from './create-comment-element.js';

let globalCommentsArrays = [];
let currentCommentsCount = 0;
const STEP_CLICK = 5;

const onLoadComments = () => {
  const commentsToShow = globalCommentsArrays.slice(0, currentCommentsCount + STEP_CLICK);

  createComment(commentsToShow);

  currentCommentsCount = commentsToShow.length;
  bigPicture.showCommentsCountElement.textContent = currentCommentsCount;

  const shouldHide = currentCommentsCount >= globalCommentsArrays.length;
  bigPicture.commentsLoaderElement.classList.toggle('hidden', shouldHide);
};


const bigImagePicture = {
  close() {
    toggleModal(previewImageElement, false);
    document.removeEventListener('keydown', bigImagePicture.closeEscape);
    bigPicture.closeImageElement.removeEventListener('click', bigImagePicture.close);
    bigPicture.commentsLoaderElement.removeEventListener('click', onLoadComments);
  },

  closeEscape() {
    bigImagePicture.close();
  },

  open() {
    document.addEventListener('keydown', bigImagePicture.closeEscape);
    bigPicture.closeImageElement.addEventListener('click', bigImagePicture.close);
    bigPicture.commentsLoaderElement.addEventListener('click', onLoadComments);
    toggleModal(previewImageElement, true);
  }

};

const onPictureClick = (evt, data) => {
  const target = evt.target.closest('.picture');
  const cloneData = [...data];

  if (target) {
    evt.preventDefault();

    const pictureId = target.dataset.id;
    const prewData = cloneData.find((item) => item.id === Number(pictureId));

    globalCommentsArrays = prewData.comments;

    bigPicture.imageElement.src = prewData.url;
    bigPicture.likesCountElement.textContent = prewData.likes;
    bigPicture.totalCommentsCountElement.textContent = globalCommentsArrays.length;

    bigPicture.socialCaptionElement.textContent = prewData.description;
    currentCommentsCount = 0;
    bigImagePicture.open();
    onLoadComments();
  }
};


export { onPictureClick };
