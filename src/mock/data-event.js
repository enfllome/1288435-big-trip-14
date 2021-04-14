// import dayjs from 'dayjs';
import { getRandomInteger, getRandomArrayElement, getNoRepeatElements, generateRandomId, generateDate, generateTime } from '../util.js';
import {
  pointTypes,
  prices,
  destinations,
  descriptions,
  pictures
} from './mocks.js';


const generateDestination = () => {
  return {
    description: getRandomArrayElement(descriptions),
    name: getRandomArrayElement(destinations),
    pictures: getNoRepeatElements(pictures),
  };
};

const generateOptions = () => {
  const options = [
    {
      title: 'Choose meal',
      price: 180,
    },
    {
      title: 'Upgrade to comfort class',
      price: 50,
    },
    {
      title: 'Switch to comfort',
      price: 80,
    },
    {
      title: 'Add luggage',
      price: 50,
    },
    {
      title: 'Travel by train',
      price: 5,
    },
  ];

  return getNoRepeatElements(options);
};

const generateDuration = () => {
  let hours = getRandomInteger(0, 3);
  let min = getRandomInteger(0, 60);
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (min < 10) {
    min = '0' + min;
  }
  return hours + 'H' + ' ' + min + 'M';
};

export const generatePoint = () => {
  return {
    basePrice: getRandomArrayElement(prices),
    date: generateDate(),
    time: generateTime(),
    duration: generateDuration(),
    destination: generateDestination(),
    id: generateRandomId(),
    isFavorite: !!getRandomInteger(),
    offers: generateOptions(),
    type: getRandomArrayElement(pointTypes),
  };
};

