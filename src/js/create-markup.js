import galleryMarkUp from '../templates/gallery.hbs';
import { eventInput, countryInput, gallery } from './refs';

export function createGalleryMarkup(events) {
  const markUp = galleryMarkUp(events);
  gallery.insertAdjacentHTML('beforeend', markUp);
}

export function clearGalleryMarkup() {
  gallery.innerHTML = '';
}
