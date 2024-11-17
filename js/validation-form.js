import '../vendor/pristine/pristine.min.js';
import { uploud, uploadFormElement, FILES_TYPES, API } from './const.js';
import { openModalForm, closeModalForm } from './modal-forms.js';
import { displayMessage } from './displayMessage.js';


const COMMENT_MAX_LENGTH = 140;
const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;

const effectsPreviewElement = uploadFormElement.querySelectorAll('.effects__preview');


const configPristine = {
  classTo : 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag : 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
};

const errorMessages = {
  maxLengthComment: `длина комментария не может составлять больше ${COMMENT_MAX_LENGTH} символов`,
  maxHashTag : 'превышено количество хэштегов',
  noValidHash : 'введён невалидный хэштег ',
  replayHashTag : 'хэштеги повторяются',
};

const pristine = new Pristine(uploadFormElement, configPristine);

const checkingLength = (value) => value.length <= COMMENT_MAX_LENGTH;

pristine.addValidator(uploud.textDescriptionElement, checkingLength, errorMessages.maxLengthComment);

const validateHashtags = (value) => {
  const hashtag = value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const hashTagNew = new Set(hashtag).size !== hashtag.length;
  const testRegex = hashtag.every((tag) => HASHTAG_REGEX.test(tag));

  const validations = [
    {
      check   : () => hashtag.length > 5,
      message :  errorMessages.maxHashTag
    },
    {
      check   : () => hashTagNew,
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
  uploud.textHashtagsElement,
  (value) => validateHashtags(value) === true,
  validateHashtags,
);

const resetForm = () => {
  uploud.textDescriptionElement.value = '';
  uploud.textHashtagsElement.value = '';
  uploud.fileElement.value = '';

  pristine.reset();
};


const sendFormData = async () => {
  const formData = new FormData(uploadFormElement);
  uploud.submitElement.disabled = true;

  try {
    const response = await fetch(API.POST_DATA, {
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
    uploud.submitElement.disabled = false;
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if(!isValid){
    return;
  }
  sendFormData();
};

const setBackgroundPreviewImage = (imageUrl) => {
  effectsPreviewElement.forEach((element) => {
    element.style.backgroundImage = `url(${imageUrl})`;
  });
};


const onUploudFile = () => {
  const file = uploud.fileElement.files[0];
  const imageUrl = URL.createObjectURL(file);
  const fileName = file.name.toLowerCase();
  const matches = FILES_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    uploud.imageElement.src = imageUrl;
    setBackgroundPreviewImage(imageUrl);
    openModalForm();
    uploadFormElement.addEventListener('submit', onFormSubmit);
  }
};


uploud.fileElement.addEventListener('change', onUploudFile);

export {resetForm};


