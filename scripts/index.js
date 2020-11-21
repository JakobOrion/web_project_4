const editProfileButton = document.querySelector('.profile__edit');
const closeEditProfileButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const form = document.querySelector('.form__profile-edit');
const nameInput = document.querySelector('.form__input_type_name');
const descriptionInput = document.querySelector('.form__input_type_description');
const profileName = document.querySelector('.profile__name-text');
const profileDescription = document.querySelector('.profile__description');

function togglePopup() {
  popup.classList.toggle('popup_opened');

  if (popup.classList.contains('popup_opened')) {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  }
}

function profileSubmit(e) {
  e.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  togglePopup();
}

editProfileButton.addEventListener('click', togglePopup)

closeEditProfileButton.addEventListener('click', togglePopup)

form.addEventListener('submit', profileSubmit)


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

const cardTemplate = document.querySelector('.photo-card-template').content.querySelector('.photo-card');
const list = document.querySelector('.photo-cards__group');

initialCards.forEach(data => {

  const cardElement = cardTemplate.cloneNode(true);



  const cardImage = cardElement.querySelector('.photo-card__image');
  const cardTitle = cardElement.querySelector('.photo-card__title');
  const cardLikeButton = cardElement.querySelector('.photo-card__heart');
  const cardDeleteButton = cardElement.querySelector('.photo-card__delete-button');

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardLikeButton.addEventListener('click', () => {

  })

  cardDeleteButton.addEventListener('click', () => {

  })

  cardImage.addEventListener('click', () => {

  })

  list.prepend(cardElement);
})
