
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

// ПРЕЖНИЙ КОД

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// const btnChange = document.querySelector('#theme-switch-toggle');
// btnChange.addEventListener('change', themeChange);


// const bodyRef = document.body;
// const containerRef = document.querySelector('.container');
// const headerRef = document.querySelector('.header-bg');
// const footerRef = document.querySelector('.footer-section');

// const fixTheme = localStorage.getItem('theme');

// if (!fixTheme) {
//     localStorage.setItem('theme', Theme.DARK)
//     bodyRef.classList.add('dark-theme');
// }

// function themeChange() {
//     if (btnChange.checked !== true) {
//         bodyRef.classList.add('dark-theme');
//         bodyRef.classList.remove('light-theme');
//         headerRef.classList.add('dark-theme');
//         headerRef.classList.remove('light-theme');
//         footerRef.classList.add('dark-theme');
//         footerRef.classList.remove('light-theme');
//         localStorage.setItem('theme', Theme.DARK);
//     } else {
//         bodyRef.classList.add('light-theme');
//         bodyRef.classList.remove('dark-theme');
//         headerRef.classList.add('light-theme');
//         headerRef.classList.remove('dark-theme');
//         footerRef.classList.add('light-theme');
//         footerRef.classList.remove('dark-theme');
//         localStorage.setItem('theme', Theme.LIGHT);
//     }
// }

// if (fixTheme === Theme.LIGHT) {
//     bodyRef.classList.add('light-theme');
//     bodyRef.classList.remove('dark-theme');
//     headerRef.classList.add('light-theme');
//     headerRef.classList.remove('dark-theme');
//     footerRef.classList.add('light-theme');
//         footerRef.classList.remove('dark-theme');
//      btnChange.checked = true;
// } else if (fixTheme === Theme.DARK) {
//     bodyRef.classList.add('dark-theme');
//     bodyRef.classList.remove('light-theme');
//     headerRef.classList.add('dark-theme');
//     headerRef.classList.remove('light-theme');
//     footerRef.classList.add('dark-theme');
//         footerRef.classList.remove('light-theme');

// }

