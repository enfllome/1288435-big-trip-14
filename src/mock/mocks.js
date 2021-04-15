import { getRandomInteger } from '../util.js';

const pointTypes = [
  'taxi',
  'bus',
  'train',
  'ship',
  'transport',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const prices = [
  1100,
  2100,
  3100,
  4100,
];

const destinations = [
  'Amsterdam',
  'Chamonix',
  'Geneva',
  'Helsinki',
];
const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
];
const pictures = [
  {
    src: `http://picsum.photos/248/152?r=${getRandomInteger(0, 5)}`,
    description: 'Chamonix parliament building',
  },
  {
    src: `http://picsum.photos/248/152?r=${getRandomInteger(0, 5)}`,
    description: 'Amsterdam parliament building',
  },
  {
    src: `http://picsum.photos/248/152?r=${getRandomInteger(0, 5)}`,
    description: 'Helsinki parliament building',
  },
];

export {
  pointTypes,
  prices,
  destinations,
  descriptions,
  pictures
};

