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

export {MESSAGE, NAMES, DESCRIPTION_PHOTO, PhotoConfig, Avatar, BoxPicture, TemplateElement};
