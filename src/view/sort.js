const itemSortGenerator = () => {
  const sortInfoList = [
    {
      type: 'day',
      text: 'Day',
    },
    {
      type: 'event',
      text: 'Event',
    },
    {
      type: 'time',
      text: 'Day',
    },
    {
      type: 'price',
      text: 'Time',
    },
    {
      type: 'offer',
      text: 'Offers',
    },
  ];
  let htmlContent = '';
  for (let i = 0; i < sortInfoList.length; i++) {
    htmlContent += `
      <div class="trip-sort__item  trip-sort__item--${sortInfoList[i].type}">
        <input id="sort-${sortInfoList[i].type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortInfoList[i].type}" checked="">
        <label class="trip-sort__btn" for="sort-${sortInfoList[i].type}">${sortInfoList[i].text}</label>
      </div>
    `;
  }
  return htmlContent;
};

const createSortTemplate = () => {
  return `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${itemSortGenerator()}
    </form>
  `;
};

export { createSortTemplate };
