const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomElement = (array) => array[getRandomNumber(0, array.length - 1)];

const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

const getElementAtIndex = (array) => {
  const newArray = [...array];
  return (index) => newArray[index];
};

export {getRandomElement, getRandomNumber, createElement, getElementAtIndex};
