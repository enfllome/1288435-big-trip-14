const createEventFormOffersTemplate = ({ offers }) => {
  const offerSelectroGenerator = (offers) => {
    let offerMarkup = '';
    offers.forEach((offer) => {
      offerMarkup += `
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.feature}-1" type="checkbox" name="event-offer-${offer.feature}" checked="false">
        <label class="event__offer-label" for="event-offer-${offer.feature}-1">
          <span class="event__offer-title">${offer.title}</span>
          +€&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>
      `;
    });
    return offerMarkup;
  };
  const offerContainerGenerator = () => {
    let containerMarkup = '';

    if(!(offers.length === 0)) {
      containerMarkup = `
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
            ${offerSelectroGenerator(offers)}
          </div>
        </section>
      `;
    } else {
      containerMarkup = '';
    }

    return containerMarkup;
  };

  return offerContainerGenerator();
};

export { createEventFormOffersTemplate };
