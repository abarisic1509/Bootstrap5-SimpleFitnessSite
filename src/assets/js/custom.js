import 'bootstrap';


const mainHeader = document.getElementById('main-header')
const navbarToggler = mainHeader.querySelector('.navbar-toggler')

document.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY
    if(scrollPosition > 1) {
        mainHeader.classList.add('active')
    } else {
        mainHeader.classList.remove('active')
    }
})

navbarToggler.addEventListener('click', () => {
    let isExpanded = navbarToggler.getAttribute('aria-expanded')
    if (isExpanded === 'true') {
        mainHeader.classList.add('active')
    } else {
        mainHeader.classList.remove('active')
    }
})