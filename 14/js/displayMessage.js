import { onHandleKeydown } from './modal-forms.js';
import { createPatternTemplate } from './utils.js';

const deleteTemplate = (template, selectButton) => {
  const onCloseTemplate = () => {
    template.remove();
    document.addEventListener('keydown', onHandleKeydown);
    document.removeEventListener('keydown', onClickEscape);
    document.removeEventListener('click', onOutsideArea);
    selectButton.removeEventListener('click', onCloseTemplate);
  };

  function onClickEscape (evt) {
    if (evt.key === 'Escape') {
      onCloseTemplate();
    }
  }

  function onOutsideArea (evt) {
    const innerArea = template.firstElementChild;

    if (!innerArea.contains(evt.target)) {
      onCloseTemplate();
    }
  }

  selectButton.addEventListener('click', onCloseTemplate);
  document.addEventListener('click', onOutsideArea);
  document.addEventListener('keydown', onClickEscape);

};


const displayMessage = (templateSelector, elementn, selectButton) => {

  const template = createPatternTemplate(templateSelector, elementn);
  const closeButton = template.querySelector(selectButton);
  document.removeEventListener('keydown', onHandleKeydown);//

  deleteTemplate(template, closeButton);
  document.body.appendChild(template);
};

export { displayMessage };
