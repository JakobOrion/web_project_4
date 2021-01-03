import { initialCards } from './initialPlaces.js';
import { newCardPopup, imagePopup, newCardButton, closeAddCardButton, closeImageButton, popupPhoto, popupPhotoTitle, openPopup, handleESC, handleOverlayClick, closePopup } from './utils.js';
import FormValidator from './FormValidator.js';
import Card from './Card.js';

const defaultConfig = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};

// Popup wrappers
const profileInfoPopup = document.querySelector('.popup_type_edit-profile');

// Forms
const profileForm = document.querySelector('.form__profile-edit');
const newCardForm = document.querySelector('.form__add-card');

// Form Validation
const editFormValidator = new FormValidator(defaultConfig, profileForm);
const addFormValidator = new FormValidator(defaultConfig, newCardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

// Open buttons
const profileButton = document.querySelector('.profile__edit');

// Close buttons
const closeProfileButton = profileInfoPopup.querySelector('.popup__close');

// Profile elements
const profileName = document.querySelector('.profile__name-text');
const profileDescription = document.querySelector('.profile__description');

// Form inputs
const nameInput = document.querySelector('.form__input_type_name');
const descriptionInput = document.querySelector('.form__input_type_description');

// Places photo cards
const list = document.querySelector('.photo-cards__group');

// Button listeners
closeProfileButton.addEventListener('click', () => {
  closePopup();
});

newCardButton.addEventListener('click', () => {
  openPopup(newCardPopup);
});

closeAddCardButton.addEventListener('click', () => {
  closePopup();
});

closeImageButton.addEventListener('click', () => {
  closePopup();
});


// Profile info submit
function submitProfileInfo(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup();
}

profileForm.addEventListener('submit', submitProfileInfo);
profileButton.addEventListener('click', () => {
  if (profileInfoPopup.classList.contains('popup_opened')) {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  }
  openPopup(profileInfoPopup);
});


const renderCard = (data, wrap) => {
  const card = new Card(data, '.photo-card-template');
  wrap.prepend(card.generateCard());
};

initialCards.reverse().forEach((data) => {
  renderCard(data, list);
});

// Add new card
function addPlace(evt) {
  evt.preventDefault();
  const data = new FormData(evt.target);
  const value = Object.fromEntries(data.entries());
  renderCard(value, list);
  newCardForm.reset();
  closePopup();
}

newCardForm.addEventListener('submit', addPlace);
