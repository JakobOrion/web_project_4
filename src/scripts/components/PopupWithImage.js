import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.popup__image');
    this._popupTitle = this._popupElement.querySelector('.popup__image-title');
  }

  open(caption, link) {
    this._popupImage .src = link;
    this._popupImage .alt = caption;
    this._popupTitle.textContent = caption;
    super.open();
  }
}

export default PopupWithImage;
