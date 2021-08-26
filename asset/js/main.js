// Button
const btnNextNewProduct = document.querySelector('#btnNextNewProduct');
const btnPrevNewProduct = document.querySelector('#btnPrevNewProduct');

const btnNextBestSeller = document.querySelector('#btnNextBestSeller');
const btnPrevBestSeller = document.querySelector('#btnPrevBestSeller');

const btnPrevSlideShow = document.querySelector('#slide-show-prev')
const btnNextSlideShow = document.querySelector('#slide-show-next')

const btnPrevCustomer = document.querySelector('#btnPrevCustomer')
const btnNextCustomer = document.querySelector('#btnNextCustomer')

const btnCloseModal = document.querySelector('#modal_close');

const btnScrollToTop = document.querySelector('#btnScrollToTop');

const btnMenuSoft = document.querySelector('#menuSoft');
const btnCloseMenuSoft = document.querySelector('#btnCloseSoftMenu');

const btnCart = document.querySelectorAll('.btn-cart--click');

// Element
const listNewProduct = document.querySelectorAll('.new-products__list-wides');
const listBestSeller = document.querySelectorAll('.new-products__list-wide--best-seller');
const timing = document.querySelectorAll('.deal__timing');
const slideShow = document.querySelector('.slide-show__wide');
const sildeShowDots = document.querySelectorAll('.slide-show__control-dot-item');
const customer = document.querySelector('.customer__list-wide');
const overLay = document.querySelector('.overlay-begin')
const Modal = document.querySelector('.modal')
const menuMain = document.querySelector('.soft__menu-list')
const menuOne = document.querySelectorAll('.soft__menu-item')
const menuSecond = document.querySelectorAll('.soft__menu-item-second')
const menuThird = document.querySelectorAll('.soft__menu-item-thirst')
const menuOverlay = document.querySelector('.soft__menu')
const softMenu = document.querySelector('.soft__menu-list')
const detailRedirect = document.querySelectorAll('.product-item__button-item--view')
const detailImgs = document.querySelectorAll('.detail__img-list-item img')

// Next/Prev Side Menu  
nextListItem = (btn, listElement) => {
    btn.onclick = function() {
        for (let i = 0; i < listElement.length; i++) {
            listElement[i].style.transform = 'translateX(-100%)'
        }
    }
}
prevListItem = (btn, listElement) => {
    btn.onclick = function() {
        for (let i = 0; i < listElement.length; i++) {
            listElement[i].style.transform = 'translateX(0)'
        }
    }
}


nextListItem(btnNextNewProduct, listNewProduct)
prevListItem(btnPrevNewProduct, listNewProduct)

nextListItem(btnNextBestSeller, listBestSeller)
prevListItem(btnPrevBestSeller, listBestSeller)

//  Timing countdown
var countDownDate = new Date("Jan 1, 2022 15:37:25").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    for (let i = 0; i < timing.length; i++) {
        timing[i].children[3].innerText = seconds;
        timing[i].children[2].innerText = minutes;
        timing[i].children[1].innerText = hours;
        timing[i].children[0].innerText = days;
    }
}, 1000);

// Next/Prev slide showTime
nextSlideShow = () => {
    slideShow.style.transform = "translateX(-100%)"
    sildeShowDots[1].classList.add('active');
    sildeShowDots[0].classList.remove('active');
}
prevSlideShow = () => {
    slideShow.style.transform = "translateX(0)";
    sildeShowDots[0].classList.add('active');
    sildeShowDots[1].classList.remove('active');
}
btnPrevSlideShow.onclick = function() {
    prevSlideShow()
}
btnNextSlideShow.onclick = function() {
    nextSlideShow();
}
sildeShowDots[0].onclick = function() {
    prevSlideShow();
}
sildeShowDots[1].onclick = function() {
    nextSlideShow();
}

setInterval(function() {
    setTimeout(function() {
        nextSlideShow();
    }, 2000);
    prevSlideShow();
}, 4000);


// Next/Prev Customer
nextCustomer = () => {
    customer.style.transform = 'translateX(-100%)'
}
prevCustomer = () => {
    customer.style.transform = 'translateX(0)'
}
btnPrevCustomer.onclick = function() {
    prevCustomer();
}
btnNextCustomer.onclick = function() {
    nextCustomer();
}

// Close Modal
closeModal = () => {
    overLay.classList.add('close');
}
btnCloseModal.onclick = function() {
    closeModal()
}
overLay.onclick = function() {
    closeModal()
}
Modal.onclick = function(event) {
    event.stopPropagation();
}
btnCloseMenuSoft.onclick = function() {
    menuOverlay.classList.add('close');
    console.log('check')
}

// Scroll to Top
btnScrollToTop.onclick = function() {
    window.scrollTo(0, 0);
}

// Menu

menuOne.forEach(function(element) {
    var stateMenuOpen = false;
    element.onclick = function() {
        let length = element.getElementsByClassName('soft__menu-item-one').length
        if (!stateMenuOpen) {
            if (length > 0) {
                for (let i = 0; i < length; i++) {
                    element.getElementsByClassName('soft__menu-item-one')[i].style.display = 'block'
                }
                stateMenuOpen = true;
            }
        } else {
            if (length > 0) {
                for (let i = 0; i < length; i++) {
                    element.getElementsByClassName('soft__menu-item-one')[i].style.display = 'none'
                }
                stateMenuOpen = false;
            }
        }
    }
})
menuSecond.forEach(function(element) {
    var stateMenuOpen = false;
    element.onclick = function(event) {
        event.stopPropagation();
        let length = element.getElementsByClassName('soft__menu-item-thirst').length
        if (!stateMenuOpen) {
            if (length > 0) {
                for (let i = 0; i < length; i++) {
                    element.getElementsByClassName('soft__menu-item-thirst')[i].style.display = 'block'
                }
                stateMenuOpen = true;
            }
        } else {
            if (length > 0) {
                for (let i = 0; i < length; i++) {
                    element.getElementsByClassName('soft__menu-item-thirst')[i].style.display = 'none'
                }
                stateMenuOpen = false;
            }
        }
        console.log(element);
    }
})

menuThird.forEach(function(element) {
    element.onclick = function(event) {
        event.stopPropagation();
    }
})

btnMenuSoft.onclick = function(event) {
    menuOverlay.classList.remove('close');

    setTimeout(() => {
        menuMain.style.transform = 'translateX(0)';
    })
}
menuOverlay.onclick = function(event) {
    menuOverlay.classList.add('close')
}
softMenu.onclick = function(event) {
    event.stopPropagation();
}

window.onscroll = function() { myFunction() };

const header = document.querySelector('.header-search-soft');
const sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
// Redirection Detail Page

for (let i = 0; i < detailRedirect.length; i++) {
    detailRedirect[i].onclick = function() {
        window.location.href = "./detail-product.html"
    }
}

// Button Cart
for (let i = 0; i < btnCart.length; i++) {
    btnCart[i].onclick = function() {
        window.location.href = "./cart.html"
    }
}