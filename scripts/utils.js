import Card from './Card.js';
import UserInfo from './UserInfo.js';
import { editProfilePopup, addCardPopup, viewImagePopup, cardSection } from './index.js';

// Buttons
export const profileButton = document.querySelector('.profile__edit');
export const newCardButton = document.querySelector('.profile__add');

// Button eventlisteners
profileButton.addEventListener('click', () => {
  showCurrentProfile();
  editProfilePopup.open();
});

newCardButton.addEventListener('click', () => {
  addCardPopup.open();
});

// Forms
export const allForms = [...document.querySelectorAll('.popup__form')];

// Profile elements
export const profileName = document.querySelector('.profile__name-text');
export const profileJob = document.querySelector('.profile__description');

// Profile form inputs
export const nameInput = document.querySelector('.form__input_type_name');
export const jobInput = document.querySelector('.form__input_type_description');

// Default settings
export const defaultConfig = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};

// User info instances
export const user = new UserInfo(
  {
    name: profileName,
    job: profileJob
  }
);

// Profile submit handler
export function submitProfileInfo({profileName, profileAboutMe}) {
  user.setUserInfo(
    {
      name: profileName,
      job: profileAboutMe
    }
  );
  editProfilePopup.close();
}

// Get current profile info
export function showCurrentProfile() {
  const currentInfo = user.getUserInfo();
  nameInput.value = currentInfo.name;
  jobInput.value = currentInfo.job;
}

// New card instances
export const createNewCard = (place) => {
  const card = new Card(
    {
      data: {name: place.name, link: place.link},
      handleCardClick: (name, link) => {
        viewImagePopup.open(name, link)
      }
    },
      '.photo-card-template'
  )
  return card.generateCard();
}

// New card submit handler
export function submitNewCard({name, link}) {
  const newCard = createNewCard(
    {
      name: name,
      link: link,
    }
  );
  cardSection.addItem(newCard);
  addCardPopup.close();
}
