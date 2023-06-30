// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const elementGallery = document.querySelector('.gallery');
const itemsMarkup = makeGalleryItems(galleryItems);
elementGallery.insertAdjacentHTML('beforeend', itemsMarkup);

function makeGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
      return `
      <li class=gallery__item>
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    </li>
  `
    }).join('');
  }

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
