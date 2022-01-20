const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const btnChange = document.querySelector('#theme-switch-toggle');
btnChange.addEventListener('change', themeChange);

const bodyRef = document.body;

function themeChange(e) {
  if (e.target.checked) {
    bodyRef.classList.toggle(Theme.LIGHT);
    bodyRef.classList.toggle(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  } else if (!e.target.checked) {
    bodyRef.classList.toggle(Theme.DARK);
    bodyRef.classList.toggle(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  }
}

fixTheme();

function fixTheme() {
  const saveKey = localStorage.getItem('theme');
  if (!saveKey) {
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', bodyRef.classList);
    btnChange.checked = false;
  } else {
    bodyRef.classList.add(saveKey);
    if (saveKey === Theme.LIGHT) {
      btnChange.checked = true;
    }
  }
}
