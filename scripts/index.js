import initialCards from './initialPlaces.js';
import { defaultConfig, allForms, submitProfileInfo, submitNewCard, createNewCard } from './utils.js';
import FormValidator from './FormValidator.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Section from './Section.js';

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
