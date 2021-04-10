import dayjs from 'dayjs';
import { getRandomInteger } from '../util.js';

const getNoRepeatElements = (elements) => {
  return elements.filter(() => Math.random() > 0.5);
};

const generatePointType = () => {
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

  const randomIndex = getRandomInteger(0, pointTypes.length - 1);

  return pointTypes[randomIndex];
};

const generateDestination = () => {
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

  const randomIndex = getRandomInteger(0, destinations.length - 1);

  return {
    description: descriptions[randomIndex],
    name: destinations[randomIndex],
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

const generatePrice = () => {
  const prices = [
    1100,
    2100,
    3100,
    4100,
  ];

  const randomIndex = getRandomInteger(0, prices.length - 1);

  return prices[randomIndex];
};

const generateDateFrom = () => {
  const randomDate = getRandomInteger(1, 5);
  return dayjs().add(randomDate, 'day');
};

const generateDateTo = (dateFrom) => {
  return dayjs(dateFrom)
    .add(getRandomInteger(0, 5), 'hour')
    .add(getRandomInteger(1, 59), 'minute');
};

export const generatePoint = () => {
  const dateFrom = generateDateFrom().toDate();
  const dateTo = generateDateTo(dateFrom).toDate();


  const getDuration = () => {
    const MILLISECONDS = 1000;
    const MINUTES = 60;
    const HOURS = 60;

    const diffTime = Math.abs(dateTo - dateFrom);
    const diffHours = Math.floor(diffTime / (MILLISECONDS * MINUTES * HOURS));
    let diffMinutes = Math.ceil(diffTime / (MILLISECONDS * MINUTES));

    if (diffMinutes > 59) {
      const moreHours = Math.floor(diffMinutes / 60);
      diffMinutes = diffMinutes - moreHours * 60;
    }

    if (diffHours < 1) {
      return (`${diffMinutes}M`);
    }

    return (`${diffHours}H ${diffMinutes}M`);
  };

  const duration = getDuration();

  return {
    basePrice: generatePrice(),
    date_from: dateFrom,
    date_to: dateTo,
    duration,
    destination: generateDestination(),
    id: '0',
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: generateOptions(),
    type: generatePointType(),
  };
};
