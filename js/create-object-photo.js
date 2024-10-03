import { MESSAGE, NAMES, DESCRIPTION_PHOTO, PhotoConfig, Avatar } from './const';
import { getRandomElement, getRandomNumber } from './utils';

let commentId = 1;

const createCommentsPhoto = () =>{
  const RANDOM_NUMBER = getRandomNumber(Avatar.MIN_NUMBER, Avatar.MAX_NUMBER);
  return {
    id : commentId++,
    avatar : `img/avatar-${RANDOM_NUMBER}.svg`,
    message : getRandomElement(MESSAGE),
    name : getRandomElement(NAMES),
  };
};

const createCommentsArray = (randomArrayLength) => Array.from({ length: randomArrayLength }, createCommentsPhoto);

const createPhotoObject = (id) => {
  const commentsArray = getRandomNumber(PhotoConfig.MIN_COMMENTS,PhotoConfig.MAX_COMMENTS);
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(DESCRIPTION_PHOTO),
    likes: getRandomNumber(PhotoConfig.MIN_LIKES, PhotoConfig.MAX_LIKES),
    comments : createCommentsArray(commentsArray),
  };
};

const PHOTOS = Array.from({length: PhotoConfig.LENGHT_ARRAY}, (_, index) => createPhotoObject(++index));

export {PHOTOS};
