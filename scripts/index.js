// Popup wrappers
const profileInfoPopup = document.querySelector('.popup_type_edit-profile');
const newCardPopup = document.querySelector('.popup_type_add-card');
const imagePopup = document.querySelector('.popup_type_image');

// Open buttons
const profileButton = document.querySelector('.profile__edit');
const newCardButton = document.querySelector('.profile__add');

// Close buttons
const closeProfileButton = profileInfoPopup.querySelector('.popup__close');
const closeAddCardButton = newCardPopup.querySelector('.popup__close');
const closeImageButton = imagePopup.querySelector('.popup__close');

// Edit form
const form = document.querySelector('.form__profile-edit');

// Profile elements
const profileName = document.querySelector('.profile__name-text');
const profileDescription = document.querySelector('.profile__description');

// Form inputs
const nameInput = document.querySelector('.form__input_type_name');
const descriptionInput = document.querySelector('.form__input_type_description');

// Places photo cards
const cardTemplate = document.querySelector('.photo-card-template').content.querySelector('.photo-card');
const list = document.querySelector('.photo-cards__group');

// Initial places
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];


function togglePopup(modal) {
  modal.classList.toggle('popup_opened');
}

function submitProfileInfo(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  togglePopup(profileInfoPopup);
}

form.addEventListener('submit', submitProfileInfo);
profileButton.addEventListener('click', () => {
  if (profileInfoPopup.classList.contains('popup_opened')) {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  }
  togglePopup(profileInfoPopup);
});

closeProfileButton.addEventListener('click', () => {
  togglePopup(profileInfoPopup);
});

newCardButton.addEventListener('click', () => {
  togglePopup(newCardPopup);
});

closeAddCardButton.addEventListener('click', () => {
  togglePopup(newCardPopup);
});

initialCards.forEach(data => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.photo-card__image');
  const cardTitle = cardElement.querySelector('.photo-card__title');
  const cardLikeButton = cardElement.querySelector('.photo-card__heart');
  const cardDeleteButton = cardElement.querySelector('.photo-card__delete-button');

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardLikeButton.addEventListener('click', (evt) => {
    if (evt.target.classList.contains("photo-card__heart")) {
      evt.target.classList.toggle("photo-card__heart_active");
    }
  });

  cardDeleteButton.addEventListener('click', () => {
    const listItem = cardDeleteButton.closest(".photo-card");
    listItem.remove();
  });

  cardImage.addEventListener('click', () => {
    togglePopup(imagePopup);
  });

  list.append(cardElement);
});

closeImageButton.addEventListener('click', () => {
  togglePopup(imagePopup);
});


