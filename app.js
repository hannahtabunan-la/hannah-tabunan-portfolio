const hamburger = document.querySelector('.header .hamburger');
const mobileMenu = document.querySelectorAll('.header .nav-list ul')[0];
const header = document.querySelector('#header');
const headerLogo = document.querySelector('#header .logo');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 300) {
		header.style.backgroundColor = '#1C0221';
        headerLogo.style.visibility = 'visible';
	} else {
		header.style.backgroundColor = 'transparent';
        headerLogo.style.visibility = 'hidden';
	}
});