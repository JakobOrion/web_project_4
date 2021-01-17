import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import { api, viewImagePopup } from '../pages/index.js';

// Initial places
export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

// Default settings
export const defaultConfig = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};
// Buttons
export const avatarButton = document.querySelector('.profile__avatar-edit');
export const profileButton = document.querySelector('.profile__edit');
export const newCardButton = document.querySelector('.profile__add');

// Forms
export const allForms = [...document.querySelectorAll('.popup__form')];

// Profile elements
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileName = document.querySelector('.profile__name-text');
export const profileJob = document.querySelector('.profile__description');

// Profile form inputs
export const nameInput = document.querySelector('.form__input_type_name');
export const jobInput = document.querySelector('.form__input_type_description');

// User info instances
export const user = new UserInfo(
  {
    name: profileName,
    about: profileJob,
    avatar: profileAvatar
  }
);

// New card instances
export const createNewCard = (data) => {
  const card = new Card(
    {
      data: data,
      handleCardClick: (name, link) => {
        viewImagePopup.open(name, link)
      },
      handleDeleteClick: (_id, cardElement) => {
      api.removeCard(_id)
        .then(() => {
          cardElement.remove();
        })
      }
    },
      '.photo-card-template'
  )
  return card.generateCard();
}
