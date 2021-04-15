export const createEventPhotosTemplate = ({ destination }) => {


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
    }

    return photosMarkup;
  };
  const photosContainerGenerator = () => {
    let containerMarkup = '';
    if(!(destination.pictures.length === 0)) {
      containerMarkup = `
        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${generatePhotos()}
          </div>
        </div>
      `;
    } else {
      containerMarkup = '';
    }

    return containerMarkup;
  };

  return photosContainerGenerator();
};
