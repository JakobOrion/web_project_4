class UserInfo {
  constructor({name, about}) {
    this._profileName = name;
    this._profileJob = about;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileJob.textContent
    }
  }

  setUserInfo(userData) {
    this._profileName.textContent = userData.name;
    this._profileJob.textContent = userData.about;
  }
}

export default UserInfo;
