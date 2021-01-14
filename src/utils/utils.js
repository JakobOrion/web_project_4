import { profileButton, nameInput, jobInput, user } from './constants.js';
import { editProfilePopup } from '../pages/index.js';

// Button eventlisteners
profileButton.addEventListener('click', () => {
  showCurrentProfile();
  editProfilePopup.open();
});

// Profile submit handler
export function submitProfileInfo({profileName, profileAboutMe}) {
  user.setUserInfo(
    {
      name: profileName,
      job: profileAboutMe
    }
  );
  editProfilePopup.close();
}

// Get current profile info
export function showCurrentProfile() {
  const currentInfo = user.getUserInfo();
  nameInput.value = currentInfo.name;
  jobInput.value = currentInfo.job;
}
