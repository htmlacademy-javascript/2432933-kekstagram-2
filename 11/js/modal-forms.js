import { resetForm } from './validation-form.js';
import {openModalWindow, closeModalWindow } from './utils.js';
import {listenersScaleControl, removeListenersScaleControl} from './scale-control.js';
import { changeListener,toggleEffectVisibility } from './effect-image.js';
import { UPLOAD, UPLOAD_FORM } from './const.js';

const closeModalActions = () => {
  resetForm();
  removeListenersScaleControl();
  toggleEffectVisibility(false);
  UPLOAD_FORM.reset();
};


const closeModalForm = () => {
  closeModalWindow(UPLOAD.OVERLAY,UPLOAD.CANCEL, closeModalForm, handleKeydown);
  closeModalActions();
};


const openModalForm = () => {
  openModalWindow(UPLOAD.OVERLAY, handleKeydown);
  UPLOAD.CANCEL.addEventListener('click', closeModalForm);
  listenersScaleControl();
  changeListener();
  toggleEffectVisibility(true);
};

function handleKeydown(evt) {
  if (document.activeElement === UPLOAD.TEXT_DESCRIPTION || document.activeElement === UPLOAD.TEXT__HASHTAGS) {
    return;
  }

  if (evt.key === 'Escape') {
    closeModalWindow(UPLOAD.OVERLAY,UPLOAD.CANCEL, closeModalForm, handleKeydown);
    closeModalActions();
  }
}


export {openModalForm, closeModalForm};
