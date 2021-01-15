class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

// load user info from server
getUserInfo() {
  return fetch(this._baseUrl + '/users/me', {
    headers: this._headers
  })
  .then(res => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
  .catch(err => console.log(err))
}

// load cards from server
getCardList() {
  return fetch(this._baseUrl + '/cards', {
    headers: this._headers
  })
  .then(res => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
  .catch(err => console.log(err))
}

//Wait for the getCardList and getUserInfo before rendering
getAppInfo() {
  return Promise.all([this.getUserInfo(), this.getCardList()])
}

// edit profile
setUserInfo({ name, about }) {
  return fetch(this._baseUrl + '/users/me', {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name,
      about
    })
  })
  .then(res => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
  .catch(err => console.log(err))
}

// add new card
addCard({ name, link }) {
  return fetch(this._baseUrl + '/cards', {
    method: 'POST',
    headers: this._headers,
    body: JSON.stringify({
      name,
      link
    })
  })
  .then(res => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
  .catch(err => console.log(err))
}


// delete a card
removeCard(cardID) {
  return fetch(this._baseUrl + '/cards/' + cardID, {
    method: 'DELETE',
    headers: this._headers
  })
  .then(res => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
  .catch(err => console.log(err))
}

// add like PUT https://around.nomoreparties.co/v1/group-7/cards/likes/cardId
// remove like  DELETE https://around.nomoreparties.co/v1/group-7/cards/likes/cardId

// update profile pic PATCH https://around.nomoreparties.co/v1/group-7/users/me/avatar
}

export default Api;
