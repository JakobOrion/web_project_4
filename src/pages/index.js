import './index.css';

import { initialCards, defaultConfig, allForms, createNewCard }  from '../utils/constants.js';
import { submitProfileInfo, submitNewCard } from '../utils/utils.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';

// Popups
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

// Load initial places
export const cardSection = new Section(
  {
    items: initialCards,
    renderer: createNewCard
  },
  '.photo-cards__group'
  );

cardSection.renderItems();
