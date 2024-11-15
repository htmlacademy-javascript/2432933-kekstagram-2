import { resetForm } from './validation-form.js';
import { uploud, uploadFormElement } from './const.js';
import {toggleModal } from './utils.js';
import {listenersScaleControl, removeListenersScaleControl} from './scale-control.js';
import { onChangeListener,toggleEffectVisibility } from './effect-image.js';


const closeModalActions = () => {
  resetForm();
  removeListenersScaleControl();
  toggleEffectVisibility(false);
  uploadFormElement.reset();
};

const modalsForm = {
  close() {
    document.removeEventListener('keydown', modalsForm.closeEscape);
    uploud.cancelElement.removeEventListener('click', modalsForm.close);
    toggleModal(uploud.overlayElement, false);
    closeModalActions();
  },

  closeEscape(evt) {
    if (document.activeElement === uploud.textDescriptionElement || document.activeElement === uploud.textHashtagsElement) {
      return;
    }
    if (evt.key === 'Escape') {
      modalsForm.close();
    }
  },
  open() {
    toggleModal(uploud.overlayElement, true);
    uploud.cancelElement.addEventListener('click', modalsForm.close);
    document.addEventListener('keydown', modalsForm.closeEscape);
  }

};

const closeModalForm = () => modalsForm.close();

const openModalForm = () => {
  modalsForm.open();
  listenersScaleControl();
  onChangeListener();
  toggleEffectVisibility(true);
};


export {openModalForm, closeModalForm, modalsForm};
