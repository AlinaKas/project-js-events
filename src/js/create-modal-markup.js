import ModalMarkUp from '../templates/modal.hbs';
import { modalGallery } from './refs';

export function createModalMarkup(embedded) {
  const markUp = ModalMarkUp(embedded);
  modalGallery.insertAdjacentHTML('beforeend', markUp);
}

export function clearModalMarkup() {
  for (let i = 1; i < modalGallery.children.length; i++) {
    modalGallery.children[i].innerHTML = '';
  }

}
