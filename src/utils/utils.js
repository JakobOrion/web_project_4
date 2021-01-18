import { avatarButton, profileButton, newCardButton, createNewCard, nameInput, jobInput, user } from './constants.js';
import { editAvatarPopup, editProfilePopup, addCardPopup, cardSection, api } from '../pages/index.js';

// Button eventlisteners
avatarButton.addEventListener('click', () => {
  editAvatarPopup.open();
});

profileButton.addEventListener('click', () => {
  showCurrentProfile();
  editProfilePopup.open();
});

newCardButton.addEventListener('click', () => {
  addCardPopup.open();
});



// Avatar submit handler
export function submitAvatar(data) {
  editAvatarPopup.saving(true);
  api.setProfilePicture(data)
    .then((res) => {
      user.setUserInfo(res);
      editAvatarPopup.close();
    })
}

// Profile submit handler
export function submitProfileInfo(data) {
  editProfilePopup.saving(true);
  api.setUserInfo(data)
    .then((res) => {
      user.setUserInfo(res);
    })
    .catch(err => {console.log(err);})
    editProfilePopup.close();
}

// Get current profile info
export function showCurrentProfile() {
  const currentInfo = user.getUserInfo();
  nameInput.value = currentInfo.name;
  jobInput.value = currentInfo.about;
}

// New card submit handler
export function submitNewCard({ name, link }) {
  addCardPopup.saving(true);
  api.addCard({ name, link })
    .then((res) => {
      const newCard = createNewCard(res);
      cardSection.addItem(newCard);
      addCardPopup.close();
    })
    .catch(err => {console.log(err);})
}
