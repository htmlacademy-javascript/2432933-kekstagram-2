import { UPLOAD, UPLOAD_FORM } from './const.js';
import { toggleModal } from './utils.js';
import '../vendor/pristine/pristine.min.js';
import { handleEscapeKey, removeListener } from './utils.js';

const config = {
  classTo : 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag : 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
};

const COMMENT_MAX_LENGTH = 140;

const errorMessages = {
  maxLengthComment: `длина комментария не может составлять больше ${COMMENT_MAX_LENGTH} символов`,
  maxHashTag : 'превышено количество хэштегов',
  noValidHash : 'введён невалидный хэштег ',
  replayHashTag : 'хэштеги повторяются',
};

const pristine = new Pristine(UPLOAD_FORM, config);

const checkingLength = (value) => value.length <= COMMENT_MAX_LENGTH;
pristine.addValidator(UPLOAD.TEXT_DESCRIPTION, checkingLength, errorMessages.maxLengthComment);

const validateHashtags = (val) => {
  const hashtags = val.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
  const hashtagsNew = new Set(hashtags).size !== hashtags.length;
  const testRegex = hashtags.every((tag) => HASHTAG_REGEX.test(tag));

  const validations = [
    {
      check   : () => hashtags.length > 5,
      message :  errorMessages.maxHashTag
    },
    {
      check   : () => hashtagsNew,
      message :  errorMessages.replayHashTag
    },
    {
      check   : () => !testRegex,
      message :  errorMessages.noValidHash
    },
  ];
  const error = validations.find((validation) => validation.check());
  return error ? error.message : true;
};

pristine.addValidator(
  UPLOAD.TEXT__HASHTAGS,
  (value) => validateHashtags(value) === true,
  validateHashtags,

);

const resetForm = () => {
  UPLOAD.TEXT_DESCRIPTION.value = '';
  UPLOAD.TEXT__HASHTAGS.value = '';
  UPLOAD.FILE = '';

  pristine.reset();
};

UPLOAD_FORM.addEventListener('submit', (evt) => {

  const test = pristine.validate();
  if(test){
    // eslint-disable-next-line no-console
    console.log('true');
  //UPLOAD.SUBMIT.disabled = true
  }else{
    // eslint-disable-next-line no-console
    console.log('false');
    evt.preventDefault();
  }
});


const handleKeydown = (evt) => {
  if (document.activeElement === UPLOAD.TEXT_DESCRIPTION || document.activeElement === UPLOAD.TEXT__HASHTAGS) {
    return;
  }
  resetForm();
  handleEscapeKey(evt, UPLOAD.OVERLAY, handleKeydown);
};

UPLOAD.FILE.addEventListener('click', () => {
  toggleModal(UPLOAD.OVERLAY, true);
  document.addEventListener('keydown', handleKeydown);

});

UPLOAD.CANCEL.addEventListener('click', () => {
  toggleModal(UPLOAD.OVERLAY, false);
  resetForm();
  removeListener(handleKeydown);
});
