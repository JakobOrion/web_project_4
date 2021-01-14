class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

// load user info from server GET https://around.nomoreparties.co/v1/group-7/users/me

// load cards from server GET https://around.nomoreparties.co/v1/group-7/cards
getCardList() {
  return fetch(this._baseUrl + '/cards', {
    headers: this._headers
  })
  .then(res => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
  .catch(err => console.log(err))
}

// edit profile PATCH https://around.nomoreparties.co/v1/group-7/users/me
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

// add new card POST https://around.nomoreparties.co/v1/group-7/cards

// delete a card DELETE https://around.nomoreparties.co/v1/group-7/cards/cardId

// add like PUT https://around.nomoreparties.co/v1/group-7/cards/likes/cardId
// remove like  DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId

// update profile pic PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
}

export default Api;
