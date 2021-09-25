import { fetchEvents } from './api_service';
import { eventInput, gallery, form, pagination } from './refs';
import { clearGalleryMarkup, createGalleryMarkup } from './create-markup';
import debounce from 'lodash.debounce';
import { error, success } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import { openModal } from './modal';
import { myPagination } from './pagination.js';
import { clearModalMarkup } from './create-modal-markup';

window.addEventListener('DOMContentLoaded', onLoadPage);
eventInput.addEventListener('input', debounce(onEventSearch, 1000));

form.addEventListener('submit', function (e) {
  e.preventDefault();
});


function renderModal(data) {
  gallery.addEventListener('click', e => {
    openModal(e, data);
  });
}

export const state = {
  page: 0,
  query: '',
  classification: 'music',
  country: '',
  code: '',
};

export async function onLoadPage() {
  const data = await fetchEvents(state.query, state.page, state.classification, state.country);
  clearGalleryMarkup();
  createGalleryMarkup(data);
  renderModal(data);
  const pageSize = data.page.size;
  const totalEl = data.page.totalElements;
  if (totalEl > 1000) {
    myPagination._options.totalItems = 1000 - pageSize;
  } else {
    myPagination._options.totalItems = totalEl;
  }
  myPagination._options.itemsPerPage = pageSize;
}

export async function onEventSearch(e) {
  e.preventDefault();
  state.query = e.target.value.trim();
  resetPage();
  try {
    const data = await fetchEvents(state.query, state.page, state.classification, state.country);
    clearGalleryMarkup();
    createGalleryMarkup(data);
    renderModal(data);

    if (resetPage) {
      myPagination.reset();
    }

    const pageSize = data.page.size;
    const totalEl = data.page.totalElements;
    myPagination._options.totalItems = totalEl;
    myPagination._options.itemsPerPage = pageSize;

    if (data._embedded.events.length > 1 && e.target.value.length > 3) {
      success({
        text: `Congratulations! Events for your request were found`,
        delay: 1000,
        maxTextHeight: null,
      });

      pagination.classList.remove('is-hidden');
      pagination.classList.add('is-open');
    }
  } catch (err) {
    e.target.value = '';
    gallery.innerHTML = 'Oops :(';
    error({
      text: 'Can not find any event for your request',
      delay: 1000,
      maxTextHeight: null,
    });
    pagination.classList.remove('is-open');
    pagination.classList.add('is-hidden');
  }
}

function resetPage() {
  state.page = 0;
}