import { generateHumanizeDate } from '../util.js';

export const createWaypointTemplate = ({ type, time, duration, destination, basePrice, offers, isFavorite }) => {

  const favoriteClassName = isFavorite
    ? 'event__favorite-btn'
    : 'event__favorite-btn event__favorite-btn--active';

  const createEventOffer = (offers) => {
    let offerMarkup = '';
    for (let i = 0; i < offers.length; i++) {
      offerMarkup += `
        <li class="event__offer">
          <span class="event__offer-title">${offers[i].title}</span>
          +€&nbsp;
          <span class="event__offer-price">${offers[i].price}</span>
        </li>
      `;
    }
    return offerMarkup;
  };

  return `
    <li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="2019-03-18">${generateHumanizeDate()}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type ${type}">
        </div>
        <h3 class="event__title">${type} ${destination.name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T10:30">${time}</time>
            —
            <time class="event__end-time" datetime="2019-03-18T11:00">${time}</time>
          </p>
          <p class="event__duration">${duration}</p>
        </div>
        <p class="event__price">
          €&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${createEventOffer(offers)}
        </ul>
        <button class="${favoriteClassName}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `;
};
