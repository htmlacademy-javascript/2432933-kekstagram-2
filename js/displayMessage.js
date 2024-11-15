import { createPatternTemplate } from './utils.js';
import { modalsForm } from './modal-forms.js';
const deleteTemplate = (template, selectButton) => {
  const handlers = {
    delete() {
      template.remove();
      document.addEventListener('keydown', modalsForm.onClickEscape);
      document.removeEventListener('keydown', handlers.deleteEscape);
      document.removeEventListener('click', handlers.outsideArea);
      selectButton.removeEventListener('click', handlers.delete);
    },

    deleteEscape(evt) {
      if (evt.key === 'Escape') {
        handlers.delete();
      }
    },

    outsideArea(evt) {
      const innerArea = template.firstElementChild;
      if (!innerArea.contains(evt.target)) {
        handlers.delete();
      }
    }
  };

  selectButton.addEventListener('click', handlers.delete);
  document.addEventListener('click', handlers.outsideArea);
  document.addEventListener('keydown', handlers.deleteEscape);
};

const displayMessage = (templateSelector, elementn, selectButton) => {
  const template = createPatternTemplate(templateSelector, elementn);
  const closeButton = template.querySelector(selectButton);
  document.body.appendChild(template);
  deleteTemplate(template, closeButton);
  document.removeEventListener('keydown', modalsForm.onClickEscape);
};

export { displayMessage };
