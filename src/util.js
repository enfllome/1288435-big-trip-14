import dayjs from 'dayjs';

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const humanizeEventDueTime = (dueTime) => {
  return dayjs(dueTime).format('HH:mm');
};

export const humanizeEventDueDate = (dueDate) => {
  return dayjs(dueDate).format('MMM DD');
};

export const humanizeEventDueFullDate = (dueDate) => {
  return dayjs(dueDate).format('YY/MM/DD HH:mm');
};
