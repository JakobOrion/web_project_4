function showErrorMessage() {
  const error = document.querySelector
}


function checkInputValidity(input, form, rest) {
  if(input.validity.valid) {
    // hideErrorMessage()
  } else {
    showErrorMessage(input, form, rest);
  }
}


function enableValidaton({formSelector, inputSelector, submitButtonSelector, ...rest}) {
  const forms = [...document.querySelectorAll(settings.formSelector)];

  forms.forEach((form) => {
    form.addEventListener('submit', ((e) => {
      e.preventDefault()
    }))

    const inputs = [...form.querySelectorAll(settings.inputSelector)];
    const button = form.querySelector(settings.submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener('input' , () => {
        checkInputValidity(input, form, rest);
        // toggleButtonState;
      })
    })

  })
}

enableValidaton({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
});
