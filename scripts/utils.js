export const newCardPopup = document.querySelector('.popup_type_add-card');
export const imagePopup = document.querySelector('.popup_type_image');

export const newCardButton = document.querySelector('.profile__add');

export const closeAddCardButton = newCardPopup.querySelector('.popup__close');
export const closeImageButton = imagePopup.querySelector('.popup__close');

export const popupPhoto = imagePopup.querySelector('.popup__image');
export const popupPhotoTitle = imagePopup.querySelector('.popup__image-title');

// Open popup
export function openPopup(modal) {
  modal.classList.add('popup_opened');
  window.addEventListener('keydown', handleESC);
  modal.addEventListener('click', handleOverlayClick);
}

// Escape key to close handler
export function handleESC(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}

// Overlay click to close handler
export function handleOverlayClick(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup();
  }
}

// Close popup
export function closePopup() {
  const currentPopup = document.querySelector('.popup_opened');
  currentPopup.classList.remove('popup_opened');
  window.removeEventListener('keydown', handleESC);
  currentPopup.removeEventListener('click', handleOverlayClick);
}
