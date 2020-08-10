const editProfileButton = document.querySelector('.profile__edit');
const closeEditProfileButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const form = document.querySelector('.form__profile-edit');
const nameInput = document.querySelector('.form__input_type_name');
const descriptionInput = document.querySelector('.form__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

function togglePopup() {
  popup.classList.toggle('popup_open');

  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

editProfileButton.addEventListener('click', togglePopup)

closeEditProfileButton.addEventListener('click', togglePopup)

form.addEventListener('submit', function(e) {
  e.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  togglePopup()
})
