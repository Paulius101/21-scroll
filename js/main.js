const backToTopDOM = document.querySelector('.back-to-top');
const headerDOM = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        headerDOM.classList.add('sticky')
    }
    else {
        headerDOM.classList.remove('sticky')
    }
    if (window.scrollY > 500) {
        backToTopDOM.classList.remove('hide');

    } else {
        backToTopDOM.classList.add('hide');

    }
})
