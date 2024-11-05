const PhotoConfig = {
  MIN_COMMENTS : 0,
  MAX_COMMENTS : 30,
  MIN_LIKES : 15,
  MAX_LIKES : 200,
  LENGHT_ARRAY : 25,
};

const Avatar = {
  MIN_NUMBER : 1,
  MAX_NUMBER : 6,
};

const TemplateElement = {
  PICTURE : document.querySelector('#picture').content.querySelector('.picture'),
};

const BoxPicture = {
  PICTURES : document.querySelector('.pictures'),
};

const BigPicture = {
  PREVIEW_IMAGE  : document.querySelector('.big-picture'),
  IMAGE         : document.querySelector('.big-picture__img img'),
  IMAGE_WIDTH   : 35,
  IMAGE_HEIGHT  : 35,
  CLOSE_IMAGE   : document.querySelector('.big-picture__cancel'),
  LIKES_COUNT   : document.querySelector('.likes-count'),
  SHOW_COMMENTS_COUNT  : document.querySelector('.social__comment-shown-count'),
  TOTAL_COMMENTS_COUNT : document.querySelector('.social__comment-total-count'),
  SOCIAL_CAPTION  : document.querySelector('.social__caption'),
  SOCIAL_COMMENTS : document.querySelector('.social__comments'),
  COMMENTS_LOADER : document.querySelector('.comments-loader'),
  PARENT_ELEMENT  : document.querySelector('.big-picture__preview'),
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

export {
  PhotoConfig, Avatar,
  BoxPicture,
  TemplateElement,
  BigPicture,
  UPLOAD_FORM,
  UPLOAD,
  ScaleControl,

};
