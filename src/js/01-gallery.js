// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const paretteContainer = document.querySelector('.gallery');
const createMarkup = createGalleryItems(galleryItems);

paretteContainer.insertAdjacentHTML('beforeend', createMarkup);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    }).join('');
}


paretteContainer.addEventListener('click', galleryGlleryImgClick);
