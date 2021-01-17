import './index.css';

import { defaultConfig, allForms, createNewCard, user }  from '../utils/constants.js';
import { submitProfileInfo, submitNewCard, submitAvatar } from '../utils/utils.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import Api from '../components/Api.js';

// API instance
export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-7",
  headers: {
    authorization: "7c54637c-526f-4047-8439-3339585d598e",
    "Content-Type": "application/json"
  }
});

// Load places
export const cardSection = new Section(
  {renderer: createNewCard},
  '.photo-cards__group');

// Load profile info and cards
api.getAppInfo()
.then(([userInfo, cardList]) => {
  user.setUserInfo(userInfo)
  user.setUserAvatar(userInfo)
  cardSection.renderItems(cardList)
})
.catch(err => {console.log(err);})

// Popups
export const editAvatarPopup = new PopupWithForm(
  '.popup_type_edit-avatar',
  submitAvatar
  );
editAvatarPopup.setEventListeners();

export const editProfilePopup = new PopupWithForm(
  '.popup_type_edit-profile',
  submitProfileInfo
  );
editProfilePopup.setEventListeners();

export const addCardPopup = new PopupWithForm(
  '.popup_type_add-card',
  submitNewCard
);
addCardPopup.setEventListeners();

export const viewImagePopup = new PopupWithImage(
  '.popup_type_image'
  );
viewImagePopup.setEventListeners();

// Forms
allForms.forEach((form) => {
  const formValidator = new FormValidator(defaultConfig, form);
  formValidator.enableValidation();
});
