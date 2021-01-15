import './index.css';

import { defaultConfig, allForms, createNewCard, user }  from '../utils/constants.js';
import { submitProfileInfo, submitNewCard } from '../utils/utils.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import Api from '../components/Api.js';

// API instance
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-7",
  headers: {
    authorization: "7c54637c-526f-4047-8439-3339585d598e",
    "Content-Type": "application/json"
  }
});

// Load initial places
export const cardSection = new Section(
  {renderer: createNewCard},
  '.photo-cards__group');

export const addCardPopup = new PopupWithForm(
  '.popup_type_add-card',
  submitNewCard
);
addCardPopup.setEventListeners();

// Load cards
api.getCardList()
  .then(res => {
    cardSection.renderItems(res);
  })
  .catch(err => {console.log(err);})

// Load profile info
api.getUserInfo()
  .then(res => {
    user.setUserInfo(res)
  })
  .catch(err => {console.log(err);})

// Popups
export const editProfilePopup = new PopupWithForm(
  '.popup_type_edit-profile',
  submitProfileInfo
  );
editProfilePopup.setEventListeners();

export const viewImagePopup = new PopupWithImage(
  '.popup_type_image'
  );
viewImagePopup.setEventListeners();

// Forms
allForms.forEach((form) => {
  const formValidator = new FormValidator(defaultConfig, form);
  formValidator.enableValidation();
});
