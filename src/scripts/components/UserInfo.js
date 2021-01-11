class UserInfo {
  constructor({name, job}) {
    this._profileName = name;
    this._profileJob = job;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent
    }
  }

  setUserInfo(userData) {
    this._profileName.textContent = userData.name;
    this._profileJob.textContent = userData.job;
  }
}

export default UserInfo;
