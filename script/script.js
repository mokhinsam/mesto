let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__open-popup');
let popupCloseButton = popup.querySelector('.popup__close-button');

let inputName = document.querySelector('.popup__field_name');
let inputdAboutSelf = document.querySelector('.popup__field_about-self');

let profileName = document.querySelector('.profile__title');
let profileAboutSelf = document.querySelector('.profile__subtitle');


function popupToggle(event) {
  popup.classList.toggle('popup_opened');
  if (popup.classList.contains('popup_opened')) { 
    inputName.value = profileName.textContent;
    inputdAboutSelf.value = profileAboutSelf.textContent;
  }
}

function clickInOverlay(event) {
  if (event.target === event.currentTarget) {
    popupToggle();
  }
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popup.addEventListener('click', clickInOverlay);

let formElement = document.querySelector('.popup__container');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAboutSelf.textContent = inputdAboutSelf.value;
    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);