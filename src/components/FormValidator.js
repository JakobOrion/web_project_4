class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
  }

  _showErrorMessage(input) {
    const error = input.nextElementSibling;
      error.textContent = input.validationMessage;

      error.classList.add(this._errorClass);
      input.classList.add(this._inputErrorClass);
  }

  _hideErrorMessage(input) {
    const error = input.nextElementSibling;
      error.textContent = '';

      error.classList.remove(this._errorClass);
      input.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideErrorMessage(input);
    } else {
      this._showErrorMessage(input, input.validationMessage);
    }
  }

  _toggleButtonState(inputs, button) {
    const isValid = inputs.every((input) => input.validity.valid);
    if (isValid) {
      button.classList.remove(this._inactiveButtonClass);
      button.removeAttribute("disabled");
    } else {
      button.classList.add(this._inactiveButtonClass);
      button.setAttribute("disabled", " ");
    }
  }

  _setEventListeners() {
    const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    const button = this._form.querySelector(this._submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState(inputs, button);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    this._setEventListeners();
  }
}

export default FormValidator;


