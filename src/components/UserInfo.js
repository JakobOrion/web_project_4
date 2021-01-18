class UserInfo {
  constructor({name, about, avatar}) {
    this._profileName = name;
    this._profileJob = about;
    this._profileAvatar = avatar;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileJob.textContent
    }
  }

  setUserInfo({name, about, avatar}) {
    this._profileName.textContent = name;
    this._profileJob.textContent = about;
    this._profileAvatar.alt = `${name}'s Profile Picture`;
    this._profileAvatar.src = avatar;
  }
}

export default UserInfo;
