const body = document.querySelector('body');
const main = document.querySelector('main');
const header = document.querySelector('.header_color');
const footer = document.querySelector('footer');
const nav = document.querySelector('nav');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    nav.classList.toggle('navbar-dark');
    nav.classList.toggle('bg-dark');
    const modeMessage = footer.classList.contains('dark-mode') ?
      'Dark Mode' 
      : "Light Mode"
  
    modeStatus.innerText = modeMessage;
  }

  modeToggle.addEventListener('click', toggleMode);