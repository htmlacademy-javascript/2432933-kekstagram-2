import '../vendor/nouislider/nouislider.js';
import { UPLOAD, UPLOAD_FORM_ELEMENT } from './const.js';

const SLIDER_ELEMENT = UPLOAD_FORM_ELEMENT.querySelector('.effect-level__slider');
const EFFECTS_LIST_ELEMENT = UPLOAD_FORM_ELEMENT.querySelector('.effects__list');
const EFFECTS_LEVEL_NUMBER_ELEMENT = UPLOAD_FORM_ELEMENT.querySelector('.effect-level__value');

const effects = {
  chrome : { step : 0.1, max : 1, min : 0, effect : (level) => `grayscale(${level})` },
  sepia  : { step : 0.1, max : 1, min : 0, effect : (level) => `sepia(${level})` },
  marvin : { step : 1, max   : 100, min : 0, effect : (level) => `invert(${level}%)` },
  phobos : { step : 0.1, max : 3, min : 0, effect : (level) => `blur(${level}px)` },
  heat   : { step : 0.1, max : 3, min : 1, effect : (level) => `brightness(${level})` },
};

const slider = noUiSlider.create(SLIDER_ELEMENT, {
  range : {
    min: 0,
    max: 1
  },
  start : 0,
  step  : 0.1,
  connect: 'lower',
});

const updateConfig = ({min, max, step}) =>{
  slider.updateOptions({
    range : {
      min ,
      max
    },
    step,
    start : max
  });

};

const applyEffect = (name, level) => {
  const nameEffect = effects[name];
  UPLOAD.IMAGE_ELEMENT.style.filter = nameEffect ? nameEffect.effect(level) : 'none';
  EFFECTS_LEVEL_NUMBER_ELEMENT.setAttribute('value', level);
};

const toggleEffectVisibility = (isHidden) => {
  UPLOAD.LEVEL_ELEMENT.classList.toggle('hidden', isHidden);
  if (isHidden){
    slider.set(0);
  }
};

const onEffectChange = (evt) => {
  const target = evt.target;

  if(target.classList.contains('effects__radio')){
    const selectedEffect = target.value;
    const effectConfig = effects[selectedEffect];


    if (effectConfig) {
      updateConfig(effectConfig);
      toggleEffectVisibility(false);
    }else {
      toggleEffectVisibility(true);
    }
  }
};

const onChangeListener = () => {
  EFFECTS_LIST_ELEMENT.addEventListener('change', onEffectChange);
};

slider.on('update', (values) => {
  const level = parseFloat(values[0]);
  const name = EFFECTS_LIST_ELEMENT.querySelector('.effects__radio:checked').value;
  applyEffect(name, level);
});

export { onChangeListener, toggleEffectVisibility };
