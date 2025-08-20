const openBtn = document.querySelector('.open-nav-btn');
const closeBtn = document.querySelector('.close-nav-btn');
const navBar = document.querySelector('#nav-bar');
const mainHeader = document.querySelector('.main-header');

openBtn.addEventListener('click', () => {
    openBtn.style.display = 'none';
    navBar.classList.add('open');
    closeBtn.classList.add('open-btn');
    openBtn.classList.remove('open-btn');
    document.body.classList.add('on-scroll');
});

closeBtn.addEventListener('click', () => {
    closeBtn.style.display = 'none';
    navBar.classList.remove('open');
    openBtn.classList.add('open-btn');
    closeBtn.classList.remove('open-btn');
    document.body.classList.remove('on-scroll');
});

navBar.addEventListener('click', () => {
    document.body.classList.remove('on-scroll');
    navBar.classList.remove('open');
    closeBtn.classList.remove('open-btn');
    openBtn.classList.add('open-btn');
});

// FOR STICKY NAV
const mq = window.matchMedia('(min-width: 976px)');

// ON RELOAD
if (mq.matches) {
    mainHeader.classList.add('sticky-nav');
} else {
    mainHeader.classList.remove('sticky-nav');
}

// ON WIDTH-CHANGE
mq.addEventListener('change', (e) => {
    if (e.matches) {
        mainHeader.classList.add('sticky-nav');
    } else {
        mainHeader.classList.remove('sticky-nav');
    }
});
