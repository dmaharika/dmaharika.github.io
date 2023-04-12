const themeToggler = document.querySelector('.theme-toggler');
const main = document.querySelector('.main');
let isDark = false;

themeToggler.addEventListener('click', function() {
  if (isDark) {
    main.style.backgroundColor = '';
    main.style.color = '';
    isDark = false;
  } else {
    main.style.backgroundColor = '#2E2E59';
    main.style.color = '#F8F7FD';
    isDark = true;
  }
});