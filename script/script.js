let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__open-popup');
let popupCloseButton = popup.querySelector('.popup__close-button');

function openPopup(event) {
  popup.classList.add('popup_opened');
}

function closePopup(event) {
  popup.classList.remove('popup_opened');
}

function clickInOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popup.addEventListener('click', clickInOverlay);

let formElement = document.querySelector('.popup__container');

let inputName = document.querySelector('.popup__field_name');
let inputdAboutSelf = document.querySelector('.popup__field_about-self');

let profileName = document.querySelector('.profile__title');
let profileAboutSelf = document.querySelector('.profile__subtitle');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAboutSelf.textContent = inputdAboutSelf.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);