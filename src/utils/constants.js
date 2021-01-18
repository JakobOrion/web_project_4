import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import { deleteCardPopup, viewImagePopup, userIdInfo, api } from '../pages/index.js';

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

// Update card likes
const updateCardLikes = (cardID, cardElement) => {
  cardElement.checkIfCardLiked() ?
    api.removeLike(cardID)
    .then(res => {
      cardElement.refreshLikeCount(res.likes);
    })
    .catch(err => console.log(err)) :
    api.addLike(cardID)
      .then(res => {
        cardElement.refreshLikeCount(res.likes);
      })
      .catch(err => console.log(err));
}

// New card instances
export const createNewCard = (data) => {
  const card = new Card(
    {
      data: data,
      handleCardClick: (name, link) => {
        viewImagePopup.open(name, link)
      },
      handleDeleteClick: (cardId, cardElement) => {
        deleteCardPopup.open(cardId, cardElement);
      },
      handleLikeClick: (cardId, cardElement) => {
        updateCardLikes(cardId, cardElement);
      }
    }, userIdInfo, '.photo-card-template'
  )
  return card.generateCard();
}
