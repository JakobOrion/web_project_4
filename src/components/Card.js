class Card {
  constructor({ data, handleCardClick, handleDeleteClick, handleLikeClick }, userIdInfo, cardSelector) {
    this._card = data;
    this._userIdInfo = userIdInfo;
    this._handleCardClick = handleCardClick;
    this._handleDeleteclick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._cardSelector = cardSelector;
    this._element = this._getCardTemplate();
    this._cardImage = this._element.querySelector('.photo-card__image');
    this._deleteIcon = this._element.querySelector('.photo-card__delete-button');
    this._likeIcon = this._element.querySelector('.photo-card__heart');
    this._likeCount = this._element.querySelector('.photo-card__likes');
  }

  _getCardTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.photo-card')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._likeIcon.addEventListener('click', () => this._handleLikeClick(this._card._id, this));
    this._deleteIcon.addEventListener('click', () => this._handleDeleteclick([this._card._id, this._element]));
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._card.name, this._card.link));
  }

  checkIfCardLiked() {
    return this._card.likes.some(like => like._id === this._userIdInfo);
  }

  _displayLikeCount() {
    this._likeCount.textContent = this._card.likes.length;
     this.checkIfCardLiked() ?
      this._likeIcon.classList.add('photo-card__heart_active') :
      this._likeIcon.classList.remove('photo-card__heart_active');
  }

  refreshLikeCount(data) {
    this._card.likes = data;
    this._displayLikeCount();
  }

  generateCard() {
    this._element.querySelector('.photo-card__title').textContent = this._card.name;
    this._cardImage.src = this._card.link;
    this._cardImage.alt = this._card.name;
    this._element.id = this._card._id;
    if (this._card.owner._id === this._userIdInfo) {this._deleteIcon.removeAttribute('hidden');}
    this._displayLikeCount();
    this._setEventListeners();

    return this._element;
  }
}

export default Card;
