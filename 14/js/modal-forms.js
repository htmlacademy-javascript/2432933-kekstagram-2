import { resetForm } from './validation-form.js';
import {openModalWindow, closeModalWindow } from './utils.js';
import {listenersScaleControl, removeListenersScaleControl} from './scale-control.js';
import { onChangeListener,toggleEffectVisibility } from './effect-image.js';
import { UPLOAD, UPLOAD_FORM_ELEMENT } from './const.js';

const closeModalActions = () => {
  resetForm();
  removeListenersScaleControl();
  toggleEffectVisibility(false);
  UPLOAD_FORM_ELEMENT.reset();
};


const closeModalForm = () => {
  closeModalWindow(UPLOAD.OVERLAY_ELEMENT, UPLOAD.CANCEL_ELEMENT, closeModalForm, onHandleKeydown);
  closeModalActions();
};


const openModalForm = () => {
  openModalWindow(UPLOAD.OVERLAY_ELEMENT, onHandleKeydown);
  UPLOAD.CANCEL_ELEMENT.addEventListener('click', closeModalForm);
  listenersScaleControl();
  onChangeListener();
  toggleEffectVisibility(true);
};

function onHandleKeydown(evt) {
  if (document.activeElement === UPLOAD.TEXT_DESCRIPTION_ELEMENT || document.activeElement === UPLOAD.TEXT__HASHTAGS_ELEMENT) {
    return;
  }

  if (evt.key === 'Escape') {
    closeModalForm();
  }
}


export {openModalForm, closeModalForm, onHandleKeydown};
