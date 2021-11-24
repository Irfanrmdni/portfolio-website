const burgerShow = document.querySelector('.show');
const burgerClose = document.querySelector('.close');
const aside = document.querySelector('.aside-container');

burgerShow.addEventListener('click', function (e) {
    e.preventDefault();
    aside.classList.add('show-aside');
    burgerShow.style.display = 'none';
    burgerClose.style.display = 'block';
});

burgerClose.addEventListener('click', function (e) {
    e.preventDefault();
    aside.classList.remove('show-aside');
    burgerClose.style.display = 'none';
    burgerShow.style.display = 'block';
});