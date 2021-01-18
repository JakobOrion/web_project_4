import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popupElement.querySelector('.popup__form');
    this._inputs = [...this._form.querySelectorAll('.form__input')];
    this._inputValues = {};
    this._errorMessages = [...this._form.querySelectorAll('.form__error')];
  }

  _getInputValues() {
    this._inputs.forEach(input => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  _clearErrors() {
    this._errorMessages.forEach((error) => {
      error.textContent = "";
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._submitHandler(this._getInputValues());
    });
  }

  saving(inProgress) {
    inProgress ?
      this._form.querySelector('.form__submit').textContent = 'Saving...' :
      this._form.querySelector('.form__submit').textContent = this._form.querySelector('.form__submit').name
  }

  close() {
    super.close();
    this.saving(false);
    this._form.reset();
    this._clearErrors();
  }
}

export default PopupWithForm;
