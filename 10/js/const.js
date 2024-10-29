const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const DESCRIPTION_PHOTO = [
  'Солнце на закате интересно влияет на цвет воды.',
  'Держу солнышко в руках',
  'Вечерний пейзаж с видом на закат',
  'Света в лесу, где каждый листок - отдельный шедевр',
  'Зеленые дали и синие неба в одинаковой гармонии',
  'Каждый камень в этом ручье имеет свою историю',
  'Лесные деревья, озеро и небо - идеальное сочетание',
  'Вечерний город с точки зрения сверху',
  'Пейзаж с закатом и облаками',
  'Золотистый свет заката на полях',
];

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
  PREWIE_IMAGE  : document.querySelector('.big-picture'),
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
  OVERLAY : UPLOAD_FORM.querySelector('.img-upload__overlay'),
  CANCEL  : UPLOAD_FORM.querySelector('.img-upload__cancel'),
  IMAGE   : UPLOAD_FORM.querySelector('.img-upload__preview img'),
  SUBMIT  : UPLOAD_FORM.querySelector('#upload-submit'),
  FILE    : UPLOAD_FORM.querySelector('#upload-file'),
  TEXT_DESCRIPTION : UPLOAD_FORM.querySelector('.text__description'),
  TEXT__HASHTAGS   : UPLOAD_FORM.querySelector('.text__hashtags'),
};

const ScaleConrol = {
  SMALLER : UPLOAD_FORM.querySelector('.scale__control--smaller'),
  BIGGER  : UPLOAD_FORM.querySelector('.scale__control--bigger'),
  VALUE   :  UPLOAD_FORM.querySelector('.scale__control--value'),
};

export {
  MESSAGE,
  NAMES,
  DESCRIPTION_PHOTO,
  PhotoConfig, Avatar,
  BoxPicture,
  TemplateElement,
  BigPicture,
  UPLOAD_FORM,
  UPLOAD,
  ScaleConrol,
};
