import { PHOTOS } from './create-photo.js';
import { renderingThumbnails } from './rendering-thumbnails.js';
import { renderPictures } from './image-viewer.js';
import { BoxPicture } from './const.js';
renderingThumbnails(PHOTOS);
// eslint-disable-next-line no-console
console.log(PHOTOS);

BoxPicture.PICTURES.addEventListener('click', renderPictures);
