import { handleKeydown } from './modal-forms.js';
import { createPatternTemplate } from './utils.js';

const deleteTemplate = (template, selectButton) => {
  const closeTemplate = () => {
    template.remove();
    document.addEventListener('keydown', handleKeydown);
    document.removeEventListener('keydown', onClickEscape);
    document.removeEventListener('click', outsideArea);
    selectButton.removeEventListener('click', closeTemplate);
  };

  function onClickEscape (evt) {
    if (evt.key === 'Escape') {
      closeTemplate();
    }
  }

  function outsideArea (evt) {
    const innerArea = template.firstElementChild;

    if (!innerArea.contains(evt.target)) {
      closeTemplate();
    }
  }

  selectButton.addEventListener('click', closeTemplate);
  document.addEventListener('click', outsideArea);
  document.addEventListener('keydown', onClickEscape);

};


const displayMessage = (templateSelector, elementn, selectButton) => {

  const template = createPatternTemplate(templateSelector, elementn);
  const closeButton = template.querySelector(selectButton);
  document.removeEventListener('keydown', handleKeydown);//

  deleteTemplate(template, closeButton);
  document.body.appendChild(template);
};

export { displayMessage };
