const themeToggler = document.querySelector('.theme-toggler');
const main = document.querySelector('.main');
var isDark = localStorage.getItem('isDark');

if (isDark === null) {
    localStorage.setItem('isDark', 'false');
}

themeToggler.addEventListener('click', function() {
  if (isDark) {
    main.classList.remove('dark-mode')
    isDark = false;
    localStorage.setItem('isDark', 'false');
  } else {
    main.classList.add('dark-mode');
    isDark = true;
    localStorage.setItem('isDark', 'true');
  }
});

// const themeToggler = document.querySelector('.theme-toggler');
// const main = document.querySelector('.main');

// // Check if the user has set a theme preference before
// const currentTheme = localStorage.getItem('theme');
// if (currentTheme === 'dark') {
//   main.classList.add('dark-mode');
// } else{
//     currentTheme = 'light'
// }

// themeToggler.addEventListener('click', function() {
//   // Toggle the 'dark-mode' class on the <body> element
//   main.classList.toggle('dark-mode');

//   // Store the current theme preference in local storage
//   if (main.classList.contains('dark-mode')) {
//     localStorage.setItem('theme', 'dark');

//   } else {
//     localStorage.setItem('theme', 'light');
//   }
// });