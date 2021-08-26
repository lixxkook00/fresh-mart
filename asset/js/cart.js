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

const btnEditQuantityMobile = document.querySelectorAll('.cart__item-btn-edit')
const btnDeleteItemList = document.querySelectorAll('.far.fa-trash-alt')

const quantityMinus = document.querySelectorAll('.quantity__minus')
const quantityPlus = document.querySelectorAll('.quantity__plus')
const quantityResult = document.querySelectorAll('.quantity__result')

const btnBackToVegetable = document.querySelector('#backToMainPage')

const totalPriceCart = document.querySelector('.subtotal__header-price')
const totalListPrice = document.querySelectorAll('.cart__item-total')

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

// Edit Quantity Mobile


for (let i = 0; i < btnEditQuantityMobile.length; i++) {
    var stateQuanityPopup = false;
    btnEditQuantityMobile[i].onclick = function() {
        if (stateQuanityPopup === false) {
            btnEditQuantityMobile[i]
                .parentNode.parentNode.children[1]
                .classList.add('open');
            stateQuanityPopup = true;
        } else {
            btnEditQuantityMobile[i]
                .parentNode.parentNode.children[1]
                .classList.remove('open');
            stateQuanityPopup = false;
        }
    }
}

// Quantity Controls
getTotal = (element) => {
    return element.parentNode.parentNode.parentNode.children[4].innerText;
}
getPrice = (element) => {
    return element.parentNode.parentNode.parentNode.children[2].innerText;
}

calcTotal = (element) => {
    let price = parseInt(getPrice(element).substring(1))
    let quantity = parseInt(element.innerText)
    let total = price * quantity
    if (total > 0) {
        element.parentNode.parentNode.parentNode.children[4].innerText = `$${total}.00`

    } else {
        element.parentNode.parentNode.parentNode.children[4].innerText = `$0.00`
        element.innerText = '0'
    }
}

for (let i = 0; i < quantityMinus.length; i++) {
    quantityMinus[i].onclick = function() {
        quantityResult[i].innerText = parseInt(quantityResult[i].innerText) - 1
        calcTotal(quantityResult[i])
        getTotalPriceCart()
    }
}
for (let i = 0; i < quantityPlus.length; i++) {
    quantityPlus[i].onclick = function() {
        quantityResult[i].innerText = parseInt(quantityResult[i].innerText) + 1
        calcTotal(quantityResult[i])
        getTotalPriceCart()
    }
}

// Total Price Cart
getTotalPriceCart = () => {
    var sum = 0;
    for (let i = 0; i < totalListPrice.length; i++) {
        sum = sum + parseInt(totalListPrice[i].innerText.substring(1))
    }
    totalPriceCart.innerText = `$${sum}.00`
}
getTotalPriceCart()

// Delete Item Cart
for (let i = 0; i < btnDeleteItemList.length; i++) {
    btnDeleteItemList[i].onclick = function() {
        console.log(btnDeleteItemList[i].parentNode.parentNode.classList.add('close'))
    }
}