import { createFiltersTemplate } from './view/filters';
import { createMenuTemplate } from './view/menu';
import { createSortTemplate } from './view/sort';
import { createTripCostTemplate } from './view/trip-cost';
import { createTripInfoTemplate } from './view/trip-info';
import { createWaypointTemplate } from './view/waypoint';
import { createEventFormHeaderTemplate } from './view/event-form-header.js';
import { createEventFormOffersTemplate } from './view/event-form-offers';
import { createEventDestinationTemplate } from './view/event-form-destination';
import { createEventPhotosTemplate } from './view/event-photos';

const POINT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const createWrapElement = (tagName, className) => {
  const element = document.createElement(tagName);
  const classNameList = className.split(' ');

  for (let i = 0; i < classNameList.length; i++) {
    element.classList.add(classNameList[i]);
  }

  return element;
};

const siteHeaderElement = document.querySelector('.page-header');
const tripMainElement = siteHeaderElement.querySelector('.trip-main');
const tripInfoWrap = createWrapElement('section', 'trip-main__trip-info trip-info');

tripMainElement.prepend(tripInfoWrap);

render(tripInfoWrap, createTripInfoTemplate(), 'beforeend');
render(tripInfoWrap, createTripCostTemplate(), 'beforeend');

const tripNavigationElement = siteHeaderElement.querySelector('.trip-controls__navigation');
render(tripNavigationElement, createMenuTemplate(), 'beforeend');

const tripFiltersElement = siteHeaderElement.querySelector('.trip-controls__filters');
render(tripFiltersElement, createFiltersTemplate(), 'beforeend');

const siteMainElement = document.querySelector('.page-main');
const tripEventsElement = siteMainElement.querySelector('.trip-events');
render(tripEventsElement, createSortTemplate(), 'beforeend');

const tripEventsListWrap = createWrapElement('ul', 'trip-events__list');
tripEventsElement.append(tripEventsListWrap);

const createEventFormElement = () => {
  const eventsItem = createWrapElement('li', 'trip-events__item');
  const formElement = createWrapElement('form', 'event event--edit');
  formElement.action = '#';
  formElement.method = 'post';
  eventsItem.append(formElement);
  return eventsItem;
};

const createEditPointElement = () => {
  tripEventsListWrap.prepend(createEventFormElement());
  const formEditElement = tripEventsListWrap.querySelector('.event--edit');
  render(formEditElement, createEventFormHeaderTemplate(), 'beforeend');
  const eventDetails = createWrapElement('section', 'event__details');
  formEditElement.append(eventDetails);
  render(eventDetails, createEventFormOffersTemplate(), 'beforeend');
  render(eventDetails, createEventDestinationTemplate(), 'beforeend');
};

const createNewPointElement = () => {
  tripEventsListWrap.prepend(createEventFormElement());
  const formEditElement = tripEventsListWrap.querySelector('.event--edit');
  render(formEditElement, createEventFormHeaderTemplate(), 'beforeend');
  const eventDetails = createWrapElement('section', 'event__details');
  formEditElement.append(eventDetails);
  render(eventDetails, createEventFormOffersTemplate(), 'beforeend');
  render(eventDetails, createEventDestinationTemplate(), 'beforeend');
  const eventDestination = formEditElement.querySelector('.event__section--destination');
  render(eventDestination, createEventPhotosTemplate(), 'beforeend');
};

for (let i = 0; i < POINT_COUNT; i++) {
  if ( i === 0 ) {
    createEditPointElement();
  } else {
    render(tripEventsListWrap, createWaypointTemplate(), 'beforeend');
  }
}

createNewPointElement();

