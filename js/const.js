const PICTURES_ELEMENT = document.querySelector('.pictures');
const PREVIEW_IMAGE_ELEMENT = document.querySelector('.big-picture');
const UPLOAD_FORM_ELEMENT = document.querySelector('#upload-select-image');


const BigPicture = {
  IMAGE_WIDTH   : 35,
  IMAGE_HEIGHT  : 35,
  IMAGE_ELEMENT                : PREVIEW_IMAGE_ELEMENT.querySelector('.big-picture__img img'),
  CLOSE_IMAGE_ELEMENT          : PREVIEW_IMAGE_ELEMENT.querySelector('.big-picture__cancel'),
  LIKES_COUNT_ELEMENT          : PREVIEW_IMAGE_ELEMENT.querySelector('.likes-count'),
  BIG_PREVIEW_ELEMENT          : PREVIEW_IMAGE_ELEMENT.querySelector('.big-picture__preview'),
  SHOW_COMMENTS_COUNT_ELEMENT  : PREVIEW_IMAGE_ELEMENT.querySelector('.social__comment-shown-count'),
  TOTAL_COMMENTS_COUNT_ELEMENT : PREVIEW_IMAGE_ELEMENT.querySelector('.social__comment-total-count'),
  SOCIAL_CAPTION_ELEMENT       : PREVIEW_IMAGE_ELEMENT.querySelector('.social__caption'),
  SOCIAL_COMMENTS_ELEMENT      : PREVIEW_IMAGE_ELEMENT.querySelector('.social__comments'),
  COMMENTS_LOADER_ELEMENT      : PREVIEW_IMAGE_ELEMENT.querySelector('.comments-loader'),

};

const UPLOAD = {
  OVERLAY_ELEMENT          : UPLOAD_FORM_ELEMENT.querySelector('.img-upload__overlay'),
  CANCEL_ELEMENT           : UPLOAD_FORM_ELEMENT.querySelector('.img-upload__cancel'),
  IMAGE_ELEMENT            : UPLOAD_FORM_ELEMENT.querySelector('.img-upload__preview img'),
  SUBMIT_ELEMENT           : UPLOAD_FORM_ELEMENT.querySelector('#upload-submit'),
  FILE_ELEMENT             : UPLOAD_FORM_ELEMENT.querySelector('#upload-file'),
  TEXT_DESCRIPTION_ELEMENT : UPLOAD_FORM_ELEMENT.querySelector('.text__description'),
  TEXT__HASHTAGS_ELEMENT   : UPLOAD_FORM_ELEMENT.querySelector('.text__hashtags'),
  LEVEL_ELEMENT            : UPLOAD_FORM_ELEMENT.querySelector('.img-upload__effect-level')
};

const ScaleControl = {
  SMALLER_ELEMENT : UPLOAD_FORM_ELEMENT.querySelector('.scale__control--smaller'),
  BIGGER_ELEMENT  : UPLOAD_FORM_ELEMENT.querySelector('.scale__control--bigger'),
  VALUE_ELEMENT   : UPLOAD_FORM_ELEMENT.querySelector('.scale__control--value'),
};

const FILE_TYPES = ['jpg', 'jpeg', 'png', 'webp', 'tiff'];


export {
  PICTURES_ELEMENT,
  PREVIEW_IMAGE_ELEMENT,
  BigPicture,
  UPLOAD_FORM_ELEMENT,
  UPLOAD,
  ScaleControl,
  FILE_TYPES,
};
