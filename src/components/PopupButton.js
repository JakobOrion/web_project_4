import Popup from './Popup.js';

class PopupButton extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popupElement.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._submitHandler(this._cardData);
    });
  }

  open(data) {
    super.open();
    this._cardData = data;
  }
}

export default PopupButton;
