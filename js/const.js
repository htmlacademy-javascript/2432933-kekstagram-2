const PICTURES = document.querySelector('.pictures');
const PREVIEW_IMAGE = document.querySelector('.big-picture');

const BigPicture = {
  IMAGE         : PREVIEW_IMAGE.querySelector('.big-picture__img img'),
  IMAGE_WIDTH   : 35,
  IMAGE_HEIGHT  : 35,
  CLOSE_IMAGE   : PREVIEW_IMAGE.querySelector('.big-picture__cancel'),
  LIKES_COUNT   : PREVIEW_IMAGE.querySelector('.likes-count'),
  SHOW_COMMENTS_COUNT  : PREVIEW_IMAGE.querySelector('.social__comment-shown-count'),
  TOTAL_COMMENTS_COUNT : PREVIEW_IMAGE.querySelector('.social__comment-total-count'),
  SOCIAL_CAPTION  : PREVIEW_IMAGE.querySelector('.social__caption'),
  SOCIAL_COMMENTS : PREVIEW_IMAGE.querySelector('.social__comments'),
  COMMENTS_LOADER : PREVIEW_IMAGE.querySelector('.comments-loader'),
  PARENT_ELEMENT  : PREVIEW_IMAGE.querySelector('.big-picture__preview'),
};

const UPLOAD_FORM = document.querySelector('#upload-select-image');

const UPLOAD = {
  OVERLAY          : UPLOAD_FORM.querySelector('.img-upload__overlay'),
  CANCEL           : UPLOAD_FORM.querySelector('.img-upload__cancel'),
  IMAGE            : UPLOAD_FORM.querySelector('.img-upload__preview img'),
  SUBMIT           : UPLOAD_FORM.querySelector('#upload-submit'),
  FILE             : UPLOAD_FORM.querySelector('#upload-file'),
  TEXT_DESCRIPTION : UPLOAD_FORM.querySelector('.text__description'),
  TEXT__HASHTAGS   : UPLOAD_FORM.querySelector('.text__hashtags'),
  LEVEL            : UPLOAD_FORM.querySelector('.img-upload__effect-level')
};

const ScaleControl = {
  SMALLER : UPLOAD_FORM.querySelector('.scale__control--smaller'),
  BIGGER  : UPLOAD_FORM.querySelector('.scale__control--bigger'),
  VALUE   : UPLOAD_FORM.querySelector('.scale__control--value'),
};

const FILE_TYPES = ['jpg', 'jpeg', 'png', 'webp', 'tiff'];


export {
  PICTURES,
  PREVIEW_IMAGE,
  BigPicture,
  UPLOAD_FORM,
  UPLOAD,
  ScaleControl,
  FILE_TYPES,
};
