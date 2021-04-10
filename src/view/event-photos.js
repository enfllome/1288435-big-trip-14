// const photosContainer = document.querySelector('.event__photos-container');
export const createEventPhotosTemplate = (points) => {
  const { destination } = points;


  const picturesNumber = destination.pictures.length;
  const generatePhotos = () => {
    let photosMarkup = '';

    if (!(picturesNumber === 0)) {
      for (let i = 0; i < picturesNumber; i++) {
        photosMarkup +=
          `<img class="event__photo" src="${destination.pictures[i].src}" alt="${destination.pictures[i].description}">`;
      }
    } else {
      photosMarkup = '';
      // photosContainer.classList.add('event__photos-container--hidden ');
    }

    return photosMarkup;
  };
  return `
    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${generatePhotos()}
      </div>
    </div>
  `;
};
