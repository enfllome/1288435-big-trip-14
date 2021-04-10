import {humanizeEventDueFullDate} from '../util';

const createEventFormHeaderTemplate = (points) => {
  const { type, destination, date_from, date_to, basePrice } = points;

  const eventTypeGenerator = () => {
    const eventTypeList = [
      {
        eventType: 'taxi',
        eventText: 'Taxi',
      },
      {
        eventType: 'bus',
        eventText: 'Bus',
      },
      {
        eventType: 'train',
        eventText: 'Train',
      },
      {
        eventType: 'ship',
        eventText: 'Ship',
      },
      {
        eventType: 'transport',
        eventText: 'Transport',
      },
      {
        eventType: 'drive',
        eventText: 'Drive',
      },
      {
        eventType: 'flight',
        eventText: 'Flight',
      },
      {
        eventType: 'check-in',
        eventText: 'Check-in',
      },
      {
        eventType: 'sightseeing',
        eventText: 'Sightseeing',
      },
      {
        eventType: 'restaurant',
        eventText: 'Restaurant',
      },
    ];
    let typeMarkup = '';
    for (let i = 0; i < eventTypeList.length; i++) {
      typeMarkup += `
        <div class="event__type-item">
        <input id="event-type-${eventTypeList[i].eventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventTypeList[i].eventType}">
        <label class="event__type-label  event__type-label--${eventTypeList[i].eventType}" for="event-type-${eventTypeList[i].eventType}-1">${eventTypeList[i].eventText}</label>
        </div>
      `;
    }
    return typeMarkup;
  };

  const timeStart = humanizeEventDueFullDate(date_from);
  const timeFinish = humanizeEventDueFullDate(date_to);
  return `
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type ${type}">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${eventTypeGenerator()}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
        <datalist id="destination-list-1">
          <option value="Amsterdam"></option>
          <option value="Geneva"></option>
          <option value="Chamonix"></option>
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${timeStart}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${timeFinish}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
  `;
};

export { createEventFormHeaderTemplate };
