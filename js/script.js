const popoverCart = document.querySelector('.popover');
const buttonOpenCart = document.querySelector('.popover-open-cart-button');
const buttonCloseCart = document.querySelector('.popover-close-cart-button');
const deliveryInfo = document.querySelector('.delivery-info');
const buttonCloseModal = document.querySelector('.modal-close-button');
const modalContainer = document.querySelector('.modal-container');

buttonOpenCart.onclick = function () {
  if (popoverCart.classList.contains('popover-open')) {
    popoverCart.classList.remove('popover-open');
  } else {
    popoverCart.classList.add('popover-open');
  }
}

deliveryInfo.onclick = function () {
  modalContainer.classList.remove('modal-container-close')
}

buttonCloseModal.onclick = function () {
  modalContainer.classList.add('modal-container-close')
}
