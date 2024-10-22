import { BoxPicture } from './const.js';
import { createPictureElement } from './createPictureElement.js';

const renderingThumbnails = (arr) => {
  const fragment = document.createDocumentFragment();

  arr.forEach((element, index) => {
    const pictureElements = createPictureElement(element, index);

    fragment.append(pictureElements);
  });

  BoxPicture.PICTURES.append(fragment);
};


export {renderingThumbnails};
