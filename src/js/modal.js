import { body, closeMdl, modal, modalOverlay } from './refs';
import { clearModalMarkup, createModalMarkup } from './create-modal-markup';


closeMdl.addEventListener('click', (e) => {
  closeModal(e);
  clearModalMarkup(e);

});

modalOverlay.addEventListener('click', (e) => {
  clearModalMarkup(e);
  closeModalByOverlay(e);
});
let i = 0;

export function openModal(e, data) {
  console.log(1);
  if (i === 0) {
    if (e.target.nodeName === 'LI') {
      modal.classList.add('is_open');
      body.classList.add('is_hidden');
      const src = data._embedded.events;
      const result = src.filter((el) => el.id === e.target.id);
      if (result.length > 0) {
        createModalMarkup(result[0]);
        i++;
      }
    }
  }
}
export function closeModal(el) {
  el.preventDefault();
  i = 0;
  modal.classList.remove('is_open');
  body.classList.remove('is_hidden');
}

export function closeModalByOverlay(el) {
  el.preventDefault();
  i = 0;
  modal.classList.remove('is_open');
  body.classList.remove('is_hidden');
}

