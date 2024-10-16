import { MESSAGE, NAMES, DESCRIPTION_PHOTO, PhotoConfig, Avatar } from './const.js';
import { getRandomElement, getRandomNumber } from './utils.js';


const createCommentsPhoto = () =>{
  let commentId = 1;
  return () => ({
    id : commentId++,
    avatar : `img/avatar-${getRandomNumber(Avatar.MIN_NUMBER, Avatar.MAX_NUMBER)}.svg`,
    message : getRandomElement(MESSAGE),
    name : getRandomElement(NAMES),
  });
};

const createObject = createCommentsPhoto();
const createCommentsArray = (randomArrayLength) => Array.from({ length: randomArrayLength }, createObject);

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
