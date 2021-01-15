import { profileButton, newCardButton, createNewCard, nameInput, jobInput, user } from './constants.js';
import { editProfilePopup, addCardPopup, cardSection } from '../pages/index.js';

// Button eventlisteners
profileButton.addEventListener('click', () => {
  showCurrentProfile();
  editProfilePopup.open();
});

newCardButton.addEventListener('click', () => {
  addCardPopup.open();
});

// Profile submit handler
export function submitProfileInfo({profileName, profileAboutMe}) {
  user.setUserInfo(
    {
      name: profileName,
      about: profileAboutMe
    }
  );
  editProfilePopup.close();
}

// Get current profile info
export function showCurrentProfile() {
  const currentInfo = user.getUserInfo();
  nameInput.value = currentInfo.name;
  jobInput.value = currentInfo.about;
}

// New card submit handler
export function submitNewCard({name, link}) {
  const newCard = createNewCard(
    {
      name: name,
      link: link,
    }
  );
  cardSection.addItem(newCard);
  addCardPopup.close();
}
