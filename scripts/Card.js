import { newCardPopup, imagePopup, newCardButton, closeAddCardButton, closeImageButton, popupPhoto, popupPhotoTitle, openPopup, handleESC, handleOverlayClick, closePopup } from './utils.js';

class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._newCard = this._getCardTemplate().cloneNode(true);
    this._cardTitle = this._newCard.querySelector('.photo-card__title');
    this._cardImage = this._newCard.querySelector('.photo-card__image');
    this._cardDeleteButton = this._newCard.querySelector('.photo-card__delete-button')
    this._cardLikeButton = this._newCard.querySelector('.photo-card__heart');
  }

  _getCardTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector)
          .content.querySelector('.photo-card');

    return cardTemplate;
  }

  _handleLikeButton(evt) {
    if (evt.target.classList.contains('photo-card__heart')) {
      evt.target.classList.toggle('photo-card__heart_active');
    }
  }

  _handleDeleteCard(evt) {
    const listItem = evt.target.closest('.photo-card');
    listItem.remove();
  }

  _handlePreviewPicture(evt) {
    popupPhoto.src = evt.target.closest('.photo-card__image').src;
    popupPhotoTitle.textContent = evt.target.closest('.photo-card__image').alt;
    popupPhoto.alt = evt.target.closest('.photo-card__image').alt;

    openPopup(imagePopup);
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', this._handleLikeButton);
    this._cardDeleteButton.addEventListener('click', this._handleDeleteCard);
    this._cardImage.addEventListener('click', this._handlePreviewPicture);
  }

  generateCard() {
    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();

    return this._newCard;
  }
}

export default Card;
