const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

const toggleModal = (element, open) => {
  element.classList.toggle('hidden', !open);
  document.body.classList.toggle('modal-open', open);
};

const createPatternTemplate = (templateSelector, element) =>
  document
    .querySelector(templateSelector)
    .content.querySelector(element)
    .cloneNode(true);


const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export {
  createElement,
  toggleModal,
  createPatternTemplate,
  debounce,
};
