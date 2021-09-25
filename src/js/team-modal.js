import teamModalTpl from '../templates/teamModal.hbs';
import teamData from './team.js';

const openTeamModal = document.querySelector('.footer-link');
const teamModal = document.querySelector('.modal-team');

openTeamModal.addEventListener('click', e => {
  e.preventDefault();

  const teamModalMarkup = teamModalTpl(teamData);
  teamModal.innerHTML = teamModalMarkup;

  const btnCloseModal = document.querySelector('.close');
  // document.body.style.overflow = 'hidden';

  teamModal.classList.remove('is-hidden');
  teamModal.classList.add('is-open');

  btnCloseModal.addEventListener('click', () => {
    document.body.style.overflow = 'visible';

    teamModal.classList.remove('is-open');
    teamModal.classList.add('is-hidden');
  });
});
