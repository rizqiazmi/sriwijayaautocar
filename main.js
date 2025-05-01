let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
  menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
  menu.classList.toggle('active');
  search.classList.remove('active');
}
// Hide Menu And Search Box On Scroll
window.onscroll = () => {
  menu.classList.remove('active');
  search.classList.remove('active');
}

// Header 
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

function redirectToWA(selectId) {
  const select = document.getElementById(selectId);
  const selectedValue = select.value;
  
  if (selectedValue) {
      window.open(selectedValue, '_blank');
      // Reset pilihan ke default setelah dipilih
      select.selectedIndex = 0;
  }
}

function redirectToWA1() {
  redirectToWA('waChoice1');
}

function redirectToWA2() {
  redirectToWA('waChoice2');
}

function redirectToWA3() {
  redirectToWA('waChoice3');
}

function redirectToWA4() {
  redirectToWA('waChoice4');
}

function redirectToWA5() {
  redirectToWA('waChoice5');
}

function redirectToWA6() {
  redirectToWA('waChoice6');
}
