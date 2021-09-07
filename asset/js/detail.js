const timing = document.querySelectorAll('.deal__timing');
const btnScrollToTop = document.querySelector('#btnScrollToTop');
const menuMain = document.querySelector('.soft__menu-list')

const menuOne = document.querySelectorAll('.soft__menu-item')
const menuSecond = document.querySelectorAll('.soft__menu-item-second')
const menuThird = document.querySelectorAll('.soft__menu-item-thirst')
const menuOverlay = document.querySelector('.soft__menu')
const softMenu = document.querySelector('.soft__menu-list')
const btnCloseModal = document.querySelector('#modal_close');

const menuMainOverlay = document.querySelector('.soft__menu')
const btnMenuSoft = document.querySelector('#menuSoft');
const btnCloseMenuSoft = document.querySelector('#btnCloseSoftMenu');
const detailImgs = document.querySelectorAll('.detail__img-list-item img')
const detailImgMain = document.querySelector('.detail__img-main img')


const quantityMinus = document.querySelector('.quantity__minus')
const quantityPlus = document.querySelector('.quantity__plus')
const quantityResult = document.querySelector('.quantity__result')

const btnBackToVegetable = document.querySelector('#backToMainPage')
const btnCart = document.querySelectorAll('.btn-cart--click');


// Scroll to Top
btnScrollToTop.onclick = function() {
    window.scrollTo(0, 0);
}

// Count down

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

// Control soft menu
btnMenuSoft.onclick = function(event) {
    menuMainOverlay.classList.add('open')
    menuMain.classList.add('open')
}
btnCloseMenuSoft.onclick = function() {
    menuMainOverlay.classList.remove('open');
    menuMain.classList.remove('open');
}
menuMainOverlay.onclick = function(event) {
    menuMainOverlay.classList.remove('open')
    menuMain.classList.remove('open');
}
menuMain.onclick = function(event) {
    event.stopPropagation();
}

window.onscroll = function() { myFunction() };

// Sticky Header
const header = document.querySelector('.header-search-soft');
const sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


// Detail Image Change
for (let i = 0; i < detailImgs.length; i++) {
    detailImgs[i].onclick = function() {
        detailImgMain.src = detailImgs[i].getAttribute('src');
    }
}

// Quantity Controls

quantityMinus.onclick = function() {
    quantityResult.innerText = parseInt(quantityResult.innerText) - 1
}
quantityPlus.onclick = function() {
    quantityResult.innerText = parseInt(quantityResult.innerText) + 1

}

btnBackToVegetable.onclick = function() {
    window.location.href = "./index.html"
}


// Button Cart
for (let i = 0; i < btnCart.length; i++) {
    btnCart[i].onclick = function() {
        window.location.href = "./cart.html"
    }
}

// Soft header control
openElement = (element) => {
    element.classList.add("open")
}
closeElement = (element) => {
    element.classList.remove("open")
}

const btnBag = document.querySelector('.nav-right__icon--bag')
let stateBag = false;
btnBag.onclick = () => {
    if (!stateBag) {
        openElement(btnBag, stateBag)
        stateBag = true
    } else {
        closeElement(btnBag, stateBag)
        stateBag = false
    }
}

const btnNav = document.querySelector('.nav-right__icon--nav')
let stateNav = false;
btnNav.onclick = () => {
    if (!stateNav) {
        openElement(btnNav, stateNav)
        stateNav = true
    } else {
        closeElement(btnNav, stateNav)
        stateNav = false
    }
}

const btnSearch = document.querySelector('.nav-right__icon--search')
let stateSearch = false;
btnSearch.onclick = () => {
    if (!stateSearch) {
        openElement(btnSearch, stateSearch)
        stateSearch = true
    } else {
        closeElement(btnSearch, stateSearch)
        stateSearch = false
    }
}