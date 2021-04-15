const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const getNoRepeatElements = (elements) => {
  return elements.filter(() => Math.random() > 0.5);
};

const generateHumanizeDate = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let number = getRandomInteger(1, 30);
  const randomMonth = getRandomArrayElement(months);
  if (number < 10) {
    number = '0' + number;
  }
  return randomMonth + ' ' + number;
};

const generateDate = () => {
  let number = getRandomInteger(1, 30);
  let monthNumber = getRandomInteger(0, 11);
  const year = getRandomInteger(21,23);
  if (number < 10) {
    number = '0' + number;
  }
  if (monthNumber < 10) {
    monthNumber = '0' + monthNumber;
  }

  return year + '/' + monthNumber + '/' + number;
};

const generateTime = () => {
  let hours = getRandomInteger(0, 23);
  let min = getRandomInteger(0, 60);
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (min < 10) {
    min = '0' + min;
  }

  return hours + ':' + min;
};


const generateRandomId = () => {
  return Math.floor(Math.random() * 100000);
};

export {
  getRandomInteger,
  getRandomArrayElement,
  getNoRepeatElements,
  generateHumanizeDate,
  generateDate,
  generateTime,
  generateRandomId
};
