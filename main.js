const menuBtn = document.querySelector('.menu');
const navBar = document.querySelector('.nav-bar')

const navbarToggler = () => {
  navBar.classList.toggle('show')
}

menuBtn.addEventListener('click', navbarToggler);