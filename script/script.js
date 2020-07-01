const popupAdd  = document.querySelector('.popup__add');
const popupEdit  = document.querySelector('.popup__edit');
const popupEditOpenBtn = document.querySelector('.profile__edit-button');
const popupAddOpenBtn = document.querySelector('.profile__add-button');

const popupEditCloseBtn = document.querySelector('.popup__edit-close-btn');
const popupAddCloseBtn = document.querySelector('.popup__add-close-btn');

const inputName = document.querySelector('.popup__field_name');
const inputdAboutSelf = document.querySelector('.popup__field_about-self');

const profileName = document.querySelector('.profile__title');
const profileAboutSelf = document.querySelector('.profile__subtitle');


function popupToggle(popup) {
  popup.classList.toggle('popup_opened');
}

inputName.value = profileName.textContent;
inputdAboutSelf.value = profileAboutSelf.textContent;

function overlayClosedPopupAdd (event) {
  if (event.target === event.currentTarget) {
    popupToggle(popupAdd);
  }
}

function overlayClosedPopupEdit (event) {
  if (event.target === event.currentTarget) {
    popupToggle(popupEdit);
  }
}

popupEditOpenBtn.addEventListener('click', () => popupToggle(popupEdit));
popupAddOpenBtn.addEventListener('click', () => popupToggle(popupAdd));

popupEditCloseBtn.addEventListener('click', () => popupToggle(popupEdit));
popupAddCloseBtn.addEventListener('click', () => popupToggle(popupAdd));

popupAdd.addEventListener('click', overlayClosedPopupAdd);
popupEdit.addEventListener('click', overlayClosedPopupEdit);



let formElement = document.querySelector('.popup__container');

function formSubmitHandler (event) {
    event.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAboutSelf.textContent = inputdAboutSelf.value;
    popupToggle(popupEdit);
}

formElement.addEventListener('submit', formSubmitHandler);