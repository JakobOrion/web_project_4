import FormValidator from './FormValidator.js';

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
const newCardPopup = document.querySelector('.popup_type_add-card');
const imagePopup = document.querySelector('.popup_type_image');

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
const newCardButton = document.querySelector('.profile__add');

// Close buttons
const closeProfileButton = profileInfoPopup.querySelector('.popup__close');
const closeAddCardButton = newCardPopup.querySelector('.popup__close');
const closeImageButton = imagePopup.querySelector('.popup__close');

// Profile elements
const profileName = document.querySelector('.profile__name-text');
const profileDescription = document.querySelector('.profile__description');

// Form inputs
const nameInput = document.querySelector('.form__input_type_name');
const descriptionInput = document.querySelector('.form__input_type_description');
const titleInput = document.querySelector('.form__input_type_card-title');
const imageLinkInput = document.querySelector('.form__input_type_url');

// Places photo cards
const cardTemplate = document.querySelector('.photo-card-template').content.querySelector('.photo-card');
const list = document.querySelector('.photo-cards__group');

// Image popup
const popupPhoto = imagePopup.querySelector('.popup__image');
const popupPhotoTitle = imagePopup.querySelector('.popup__image-title');

// Inital cards on page load
initialCards.forEach((data) => {
  const startingCards = addCard(data.name, data.link);
  list.append(startingCards);
});

function clickLikeButton(evt) {
  if (evt.target.classList.contains('photo-card__heart')) {
    evt.target.classList.toggle('photo-card__heart_active');
  }
}

// Add cards
function addCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.photo-card__image');
  const cardTitle = cardElement.querySelector('.photo-card__title');
  const cardLikeButton = cardElement.querySelector('.photo-card__heart');
  const cardDeleteButton = cardElement.querySelector('.photo-card__delete-button');

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  cardLikeButton.addEventListener('click', clickLikeButton);

  cardDeleteButton.addEventListener('click', () => {
    const listItem = cardDeleteButton.closest('.photo-card');
    listItem.remove();
  });

  // Image click listener
  cardImage.addEventListener('click', () => {
    popupPhoto.src = link;
    popupPhotoTitle.textContent = name;

    openPopup(imagePopup);
  });

    return cardElement;
};

// Open popup
function openPopup(modal) {
  modal.classList.add('popup_opened');
  window.addEventListener('keydown', handleESC);
  modal.addEventListener('click', handleOverlayClick);
}

// Escape key to close handler
function handleESC(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}

// Overlay click to close handler
function handleOverlayClick(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup();
  }
}

// Close popup
function closePopup() {
  const currentPopup = document.querySelector('.popup_opened');
  currentPopup.classList.remove('popup_opened');
  window.removeEventListener('keydown', handleESC);
  currentPopup.removeEventListener('click', handleOverlayClick);
}

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

// Add new card
function addPlace(e) {
  e.preventDefault();
  const newCard = addCard(titleInput.value, imageLinkInput.value);
  list.prepend(newCard);
  newCardForm.reset();
  closePopup();
}

newCardForm.addEventListener('submit', addPlace);
