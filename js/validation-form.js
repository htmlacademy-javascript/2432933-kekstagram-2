import '../vendor/pristine/pristine.min.js';
import { UPLOAD, UPLOAD_FORM_ELEMENT, FILE_TYPES } from './const.js';
import { openModalForm, closeModalForm } from './modal-forms.js';
import { displayMessage } from './displayMessage.js';


const EFFECTS_PREWIEW_IMAGE_ELEMENT = UPLOAD_FORM_ELEMENT.querySelectorAll('.effects__preview');

const COMMENT_MAX_LENGTH = 140;
const POST_API = 'https://32.javascript.htmlacademy.pro/kekstagram';
const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;

const ConfigPristine = {
  classTo : 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag : 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
};

const ErrorMessages = {
  maxLengthComment: `длина комментария не может составлять больше ${COMMENT_MAX_LENGTH} символов`,
  maxHashTag : 'превышено количество хэштегов',
  noValidHash : 'введён невалидный хэштег ',
  replayHashTag : 'хэштеги повторяются',
};

const pristine = new Pristine(UPLOAD_FORM_ELEMENT, ConfigPristine);

const checkingLength = (value) => value.length <= COMMENT_MAX_LENGTH;

pristine.addValidator(UPLOAD.TEXT_DESCRIPTION_ELEMENT, checkingLength, ErrorMessages.maxLengthComment);

const validateHashtags = (value) => {
  const hashtags = value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const hashtagsNew = new Set(hashtags).size !== hashtags.length;
  const testRegex = hashtags.every((tag) => HASHTAG_REGEX.test(tag));

  const validations = [
    {
      check   : () => hashtags.length > 5,
      message :  ErrorMessages.maxHashTag
    },
    {
      check   : () => hashtagsNew,
      message :  ErrorMessages.replayHashTag
    },
    {
      check   : () => !testRegex,
      message :  ErrorMessages.noValidHash
    },
  ];
  const error = validations.find((validation) => validation.check());
  return error ? error.message : true;
};

pristine.addValidator(
  UPLOAD.TEXT__HASHTAGS_ELEMENT,
  (value) => validateHashtags(value) === true,
  validateHashtags,

);

const resetForm = () => {
  UPLOAD.TEXT_DESCRIPTION_ELEMENT.value = '';
  UPLOAD.TEXT__HASHTAGS_ELEMENT.value = '';
  UPLOAD.FILE_ELEMENT.value = '';

  pristine.reset();
};


const sendFormData = async () => {
  const formData = new FormData(UPLOAD_FORM_ELEMENT);
  UPLOAD.SUBMIT_ELEMENT.disabled = true;

  try {
    const response = await fetch(POST_API, {
      method : 'POST',
      body   :  formData,
    });
    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
    }

    displayMessage('#success', '.success', '.success__button');
    closeModalForm();
  } catch (error) {
    displayMessage('#error', '.error', '.error__button');

  } finally{
    UPLOAD.SUBMIT_ELEMENT.disabled = false;
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if(!isValid){
    displayMessage('#error', '.error', '.error__button');
    return;
  }
  sendFormData();

};

const backgrounPreviewdImage = (imageUrl) => {
  EFFECTS_PREWIEW_IMAGE_ELEMENT.forEach((element) => {
    element.style.backgroundImage = `url(${imageUrl})`;
  });
};


const onUploudFile = () => {
  const file = UPLOAD.FILE_ELEMENT.files[0];
  const imageUrl = URL.createObjectURL(file);
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    UPLOAD.IMAGE_ELEMENT.src = imageUrl;
    backgrounPreviewdImage(imageUrl);

  } else {
    return;
  }
  openModalForm();
};


UPLOAD_FORM_ELEMENT.addEventListener('submit', onFormSubmit);

UPLOAD.FILE_ELEMENT.addEventListener('change', onUploudFile);


export {resetForm};


