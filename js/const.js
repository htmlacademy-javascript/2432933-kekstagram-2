const picturesElement = document.querySelector('.pictures');
const previewImageElement = document.querySelector('.big-picture');
const uploadFormElement = document.querySelector('#upload-select-image');

const API = {
  GET_DATA : 'https://32.javascript.htmlacademy.pro/kekstagram/data',
  POST_DATA : 'https://32.javascript.htmlacademy.pro/kekstagram',
};


const bigPicture = {
  IMAGE_WIDTH                : 35,
  IMAGE_HEIGHT               : 35,
  imageElement               : previewImageElement.querySelector('.big-picture__img img'),
  closeImageElement          : previewImageElement.querySelector('.big-picture__cancel'),
  likesCountElement          : previewImageElement.querySelector('.likes-count'),
  bigPreviewElement          : previewImageElement.querySelector('.big-picture__preview'),
  showCommentsCountElement   : previewImageElement.querySelector('.social__comment-shown-count'),
  totalCommentsCountElement  : previewImageElement.querySelector('.social__comment-total-count'),
  socialCaptionElement       : previewImageElement.querySelector('.social__caption'),
  socialCommentsElement      : previewImageElement.querySelector('.social__comments'),
  commentsLoaderElement      : previewImageElement.querySelector('.comments-loader'),
};

const uploud = {
  overlayElement          : uploadFormElement.querySelector('.img-upload__overlay'),
  cancelElement           : uploadFormElement.querySelector('.img-upload__cancel'),
  imageElement            : uploadFormElement.querySelector('.img-upload__preview img'),
  submitElement           : uploadFormElement.querySelector('#upload-submit'),
  fileElement             : uploadFormElement.querySelector('#upload-file'),
  textDescriptionElement  : uploadFormElement.querySelector('.text__description'),
  textHashtagsElement     : uploadFormElement.querySelector('.text__hashtags'),
  levelElement            : uploadFormElement.querySelector('.img-upload__effect-level')
};

const scaleControl = {
  smallerElement : uploadFormElement.querySelector('.scale__control--smaller'),
  biggerElement  : uploadFormElement.querySelector('.scale__control--bigger'),
  valueElement   : uploadFormElement.querySelector('.scale__control--value'),
};

const sliderEffect = {
  sliderElement               : uploadFormElement.querySelector('.effect-level__slider'),
  listElement          : uploadFormElement.querySelector('.effects__list'),
  levelValueElement    : uploadFormElement.querySelector('.effect-level__value'),
};


const FILES_TYPES = ['jpg', 'jpeg', 'png', 'webp', 'tiff'];


export {
  picturesElement,
  previewImageElement,
  bigPicture,
  uploadFormElement,
  uploud,
  scaleControl,
  FILES_TYPES,
  API,
  sliderEffect
};
