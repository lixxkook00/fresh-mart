const timing = document.querySelectorAll('.deal__timing');
const btnScrollToTop = document.querySelector('#btnScrollToTop');
const menuMain = document.querySelector('.soft__menu-list')

const menuOne = document.querySelectorAll('.soft__menu-item')
const menuSecond = document.querySelectorAll('.soft__menu-item-second')
const menuThird = document.querySelectorAll('.soft__menu-item-thirst')
const menuOverlay = document.querySelector('.soft__menu')
const softMenu = document.querySelector('.soft__menu-list')
const btnCloseModal = document.querySelector('#modal_close');

const btnMenuSoft = document.querySelector('#menuSoft');
const btnCloseMenuSoft = document.querySelector('#btnCloseSoftMenu');
const detailImgs = document.querySelectorAll('.detail__img-list-item img')
const detailImgMain = document.querySelector('.detail__img-main img')


const quantityMinus = document.querySelector('.quantity__minus')
const quantityPlus = document.querySelector('.quantity__plus')
const quantityResult = document.querySelector('.quantity__result')

const btnBackToVegetable = document.querySelector('#backToMainPage')


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
btnCloseMenuSoft.onclick = function() {
    menuOverlay.classList.add('close');
    console.log('check')
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