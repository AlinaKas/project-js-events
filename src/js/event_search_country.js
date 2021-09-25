import { fetchEvents } from './api_service';
import {
  countryInput,
  eventInputCounry,
  form,
  btnArrow,
  countryItem,
  pagination,
  gallery,
} from './refs';
import { clearGalleryMarkup, createGalleryMarkup } from './create-markup';
import { error, success } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import { state } from './event_search';
import countriesList from '../data_countries.json';
import listCountriesTpl from '../templates/list-countries.hbs';
import { add, debounce } from 'lodash';
import 'select-pure';
import { openModal } from './modal';

const markupCountryList = listCountriesTpl(countriesList);
eventInputCounry.insertAdjacentHTML('beforeend', markupCountryList);
form.addEventListener('change', onCountrytSearch);

function renderModal(data) {
  gallery.addEventListener('click', e => {
    openModal(e, data);
  });
}

export async function onCountrytSearch(e) {
  e.stopPropagation();

  try {
    state.country = eventInputCounry.value;
    const data = await fetchEvents(state.query, state.page, state.classification, state.country);
    clearGalleryMarkup();
    createGalleryMarkup(data);
    renderModal(data);
    if (data._embedded.events.length > 1 && e.target.value.length >= 2) {
      success({
        text: `Congratulations! Events for your request were found`,
        delay: 1000,
        maxTextHeight: null,
      });
      pagination.classList.remove('is-hidden');
      pagination.classList.add('is-open');
    }
  } catch (err) {
    clearGalleryMarkup();
    error({
      text: 'Can not find any event for your request',
      delay: 1000,
      maxTextHeight: null,
    });
    pagination.classList.remove('is-open');
    pagination.classList.add('is-hidden');
  }
}
