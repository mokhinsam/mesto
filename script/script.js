const popupAdd  = document.querySelector('.popup__add');
const popupEdit  = document.querySelector('.popup__edit');
const popupEditOpenBtn = document.querySelector('.profile__edit-button');
const popupAddOpenBtn = document.querySelector('.profile__add-button');

const popupEditCloseBtn = document.querySelector('.popup__edit-close-btn');
const popupAddCloseBtn = document.querySelector('.popup__add-close-btn');

const inputName = document.querySelector('.popup__field_name');
const inputAboutSelf = document.querySelector('.popup__field_about-self');

const profileName = document.querySelector('.profile__title');
const profileAboutSelf = document.querySelector('.profile__subtitle');


function popupToggle(popup) {
  popup.classList.toggle('popup_opened');
}

inputName.value = profileName.textContent;
inputAboutSelf.value = profileAboutSelf.textContent;

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



const formElement = document.querySelector('.popup__container-edit');

function formSubmitHandler (event) {
    event.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAboutSelf.textContent = inputAboutSelf.value;
    popupToggle(popupEdit);
}

formElement.addEventListener('submit', formSubmitHandler);


const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elementListCard = document.querySelector('.element__iteams');
const elementTemplate = document.querySelector('.element-template');


function addCard (item) {
  const card = elementTemplate.content.cloneNode(true);
  card.querySelector('.element__title').textContent = item.name;
  card.querySelector('.element__image').src = item.link;
  card.querySelector('.element__remove-btn').addEventListener('click', deleteCard);
  elementListCard.prepend(card);
}

initialCards.forEach(function (item) { addCard(item)});


function deleteCard (event) {
  const card = event.target.closest('.element');
  card.remove();
}




const formCard = document.querySelector('.popup__container-add');


const inputNamePlace = document.querySelector('.popup__field_name-place');
const inputLink = document.querySelector('.popup__field_link');

const profileNamePlace = document.querySelector('.element__title');
const profileImage = document.querySelector('.element__image');

function formSubmitCard (event) {
    event.preventDefault(); 
    profileNamePlace.textContent = inputNamePlace.value;
    profileImage.src = inputLink.value;
    inputNamePlace.value = '';
    inputLink.value = '';
    popupToggle(popupAdd);
}

formCard.addEventListener('submit', formSubmitCard);