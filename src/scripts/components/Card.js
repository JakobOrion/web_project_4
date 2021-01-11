class Card {
  constructor({data, handleCardClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
    this._element = this._getCardTemplate();
    this._cardImage = this._element.querySelector('.photo-card__image');
  }

  _getCardTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.photo-card')
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeButton(evt) {
    if (evt.target.classList.contains('photo-card__heart')) {
      evt.target.classList.toggle('photo-card__heart_active');
    }
  }

  _handleDeleteCard(evt) {
    evt.target.closest('.photo-card').remove();
  }

  _setEventListeners() {
    this._element.querySelector('.photo-card__heart')
      .addEventListener('click', this._handleLikeButton);

    this._element.querySelector('.photo-card__delete-button')
      .addEventListener('click', this._handleDeleteCard);

    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  generateCard() {
    this._element.querySelector('.photo-card__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
