import './index.css';

import { newCardButton, defaultConfig, allForms, createNewCard }  from '../utils/constants.js';
import { submitProfileInfo } from '../utils/utils.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import Api from '../components/Api.js';

// API instance
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-7",
  headers: {
    authorization: "7c54637c-526f-4047-8439-3339585d598e",
    "Content-Type": "application/json"
  }
});

// Cards setup
api.getCardList()
  .then(res => {
    // Load initial places
    const cardSection = new Section(
      {
        items: res,
        renderer: createNewCard
      },
      '.photo-cards__group'
      );

    cardSection.renderItems();

    const addCardPopup = new PopupWithForm(
      '.popup_type_add-card',
      submitNewCard
    );
    addCardPopup.setEventListeners();

    // New card submit handler
    function submitNewCard({name, link}) {
      const newCard = createNewCard(
        {
          name: name,
          link: link,
        }
      );
      cardSection.addItem(newCard);
      addCardPopup.close();
    }

    newCardButton.addEventListener('click', () => {
      addCardPopup.open();
    });
  })
  .then(res => {console.log(res);})
  .catch(err => {console.log(err);})

// Popups
export const editProfilePopup = new PopupWithForm(
  '.popup_type_edit-profile',
  submitProfileInfo
  );
editProfilePopup.setEventListeners();

export const viewImagePopup = new PopupWithImage(
  '.popup_type_image'
  );
viewImagePopup.setEventListeners();

// Forms
allForms.forEach((form) => {
  const formValidator = new FormValidator(defaultConfig, form);
  formValidator.enableValidation();
});
