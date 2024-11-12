const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomElement = (array) => array[getRandomNumber(0, array.length - 1)];

const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

const getElementAtIndex = (array) => {
  const newArray = [...array];
  return (index) => newArray[index];
};

const toggleModal = (element, open) => {
  element.classList.toggle('hidden', !open);
  document.body.classList.toggle('modal-open', open);
};


const closeModalWindow = (element,parentElement, callBack, removeDocument) => { //
  toggleModal(element, false);
  parentElement.removeEventListener('click', callBack);
  document.removeEventListener('keydown', removeDocument);
};

const openModalWindow = (element, callBack) => {
  toggleModal(element, true);
  document.addEventListener('keydown', callBack);
};

const createPatternTemplate = (templateSelector, element) => document.querySelector(templateSelector).content.querySelector(element).cloneNode(true);

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export {
  getRandomElement,
  getRandomNumber,
  createElement,
  getElementAtIndex,
  closeModalWindow,
  openModalWindow,
  toggleModal,
  createPatternTemplate,
  debounce,
};
