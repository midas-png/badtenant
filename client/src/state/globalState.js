import { makeAutoObservable } from 'mobx';

export default class GlobalState {
  constructor() {
    this._isAuth = false;
    this._language = 'en';
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(isAuth) {
    this._isAuth = isAuth;
  }

  setLanguage(language) {
    this._language = language;
  }

  setUser(user) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get language() {
    return this._language;
  }

  get user() {
    return this._user;
  }
}
