
const checkLengthsString = (string, length) => string.length <= length;

checkLengthsString('', 5);
checkLengthsString('проверяемая строка', 10);

const checkPalindrom = (word) =>{
  const string = word.replace(/ /g, '').toLowerCase();
  const reverseString = string.split('').reverse().join('');

  return string === reverseString;
};

checkPalindrom('Лёша на полке клопа нашёл ');

const extractsNumbers = (value) => {
  const string = value.toString();
  let resultDigits = '';

  for (let index = 0; index < string.length; index++) {
    const char = string[index];
    if (!Number.isNaN(parseInt(char, 10))){
      resultDigits += char;
    }
  }

  const result = parseInt(resultDigits, 10);
  return result;
};


extractsNumbers('2023 год');
extractsNumbers('ECMAScript 2022');
extractsNumbers('1 кефир, 0.5 батона');
extractsNumbers(2023);
extractsNumbers(-1);
extractsNumbers(1.5);

