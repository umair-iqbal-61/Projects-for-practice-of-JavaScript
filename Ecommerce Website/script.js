// Home Page

const bar = document.querySelector('#bar')
const close = document.querySelector('.close')
const nav = document.querySelector('.nav-items')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
};

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
};

// Product Page

var mainImg = document.querySelector('.main-img')
var smallImg = document.querySelectorAll('.small-img')

smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src
}
smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src
}
smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src
}
smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src
}