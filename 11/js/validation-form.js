import '../vendor/pristine/pristine.min.js';
import { UPLOAD, UPLOAD_FORM } from './const.js';
import { openModalForm, closeModalForm } from './modal-forms.js';

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

const validateHashtags = (value) => {
  const hashtags = value.trim().toLowerCase().split(/\s+/).filter(Boolean);
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

const displayMessage = (templateSelector, elementn) => {
  const template = document
    .querySelector(templateSelector)
    .content.querySelector(elementn)
    .cloneNode(true);

  document.body.appendChild(template);
};

const sendForm = async (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  const formData = new FormData(UPLOAD_FORM);
  const postAPI = 'https://31.javascript.htmlacademy.pro/kekstagram';
  if(!isValid){
    //UPLOAD.SUBMIT.disabled = true;
    return;
  }
  try {
    const response = await fetch(postAPI, {
      method : 'POST',
      body   :  formData,
    });
    if(response.ok){
      displayMessage('#success', '.success');
      closeModalForm();
    }
  } catch (error) {
    displayMessage('#error', '.error',);
    //console.error('Ошибка:', error);
  }finally{
    UPLOAD.SUBMIT.disabled = false;
  }
};

UPLOAD_FORM.addEventListener('submit', sendForm);

UPLOAD.FILE.addEventListener('click', openModalForm);


export {resetForm};