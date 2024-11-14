import { ScaleControl, UPLOAD } from './const.js';

const INITIAL_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP = 25;
let countPercent = INITIAL_SCALE;

const updateScale = (count) => {
  ScaleControl.VALUE_ELEMENT.value = `${count}%`;
  UPLOAD.IMAGE_ELEMENT.style.transform = `scale(${(count / 100)})`;
};

const updateButtonsState = (count) =>{
  ScaleControl.BIGGER_ELEMENT.disabled = count === MAX_SCALE;
  ScaleControl.SMALLER_ELEMENT.disabled = count === MIN_SCALE;
};

const updateCount = (newCount) => {
  countPercent = Math.max(MIN_SCALE, Math.min(newCount, MAX_SCALE));
  updateScale(countPercent);
  updateButtonsState(countPercent);
};

const createClickCounter = () => ({
  increase: () => updateCount(countPercent + STEP),
  decreasing: () => updateCount(countPercent - STEP),
  reset: () => updateCount(INITIAL_SCALE),
});

const clickCounter = createClickCounter();
const onBiggerClick = () => clickCounter.increase();
const onSmallerClick = () => clickCounter.decreasing();
const onResetClick = () => clickCounter.reset();

const listenersScaleControl = () => {
  ScaleControl.BIGGER_ELEMENT.addEventListener('click', onBiggerClick);
  ScaleControl.SMALLER_ELEMENT.addEventListener('click', onSmallerClick);
  onResetClick();
};

const removeListenersScaleControl = () => {
  ScaleControl.BIGGER_ELEMENT.removeEventListener('click', onBiggerClick);
  ScaleControl.SMALLER_ELEMENT.removeEventListener('click', onSmallerClick);
  onResetClick();
};

export {listenersScaleControl, removeListenersScaleControl, onResetClick };

