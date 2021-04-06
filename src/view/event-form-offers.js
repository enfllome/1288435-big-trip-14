const offerSelectroGenerator = () => {
  const offersInfoList = [
    {
      title: 'Add luggage',
      feature: 'luggage',
      price: 50,
    },
    {
      title: 'Switch to comfort',
      feature: 'comfort',
      price: 80,
    },
    {
      title: 'Add meal',
      feature: 'meal',
      price: 15,
    },
    {
      title: 'Choose seats',
      feature: 'seats',
      price: 5,
    },
    {
      title: 'Travel by train',
      feature: 'train',
      price: 5,
    },
  ];
  let htmlContent = '';
  for (let i = 0; i < offersInfoList.length; i++) {
    htmlContent += `
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offersInfoList[i].feature}-1" type="checkbox" name="event-offer-${offersInfoList[i].feature}" checked="false">
        <label class="event__offer-label" for="event-offer-${offersInfoList[i].feature}-1">
          <span class="event__offer-title">${offersInfoList[i].title}</span>
          +€&nbsp;
          <span class="event__offer-price">${offersInfoList[i].price}</span>
        </label>
      </div>
    `;
  }
  return htmlContent;
};

const createEventFormOffersTemplate = () => {
  return `
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
        ${offerSelectroGenerator()}
      </div>
    </section>
  `;
};

export { createEventFormOffersTemplate };
