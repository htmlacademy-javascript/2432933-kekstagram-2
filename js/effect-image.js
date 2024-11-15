import '../vendor/nouislider/nouislider.js';
import { uploud, sliderEffect } from './const.js';


const effects = {
  chrome : { step : 0.1, max : 1, min : 0, effect : (level) => `grayscale(${level})` },
  sepia  : { step : 0.1, max : 1, min : 0, effect : (level) => `sepia(${level})` },
  marvin : { step : 1, max   : 100, min : 0, effect : (level) => `invert(${level}%)` },
  phobos : { step : 0.1, max : 3, min : 0, effect : (level) => `blur(${level}px)` },
  heat   : { step : 0.1, max : 3, min : 1, effect : (level) => `brightness(${level})` },
};

const slider = noUiSlider.create(sliderEffect.sliderElement, {
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
  uploud.imageElement.style.filter = nameEffect ? nameEffect.effect(level) : 'none';
  sliderEffect.effectsLevelValueElement.setAttribute('value', level);
};

const toggleEffectVisibility = (isHidden) => {
  uploud.levelElement.classList.toggle('hidden', isHidden);
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
  sliderEffect.effectsListElement.addEventListener('change', onEffectChange);
};

slider.on('update', (values) => {
  const level = parseFloat(values[0]);
  const radioCheckedElement = sliderEffect.effectsListElement.querySelector('.effects__radio:checked').value;
  applyEffect(radioCheckedElement, level);
});

export { onChangeListener, toggleEffectVisibility };
