import { makeAutoObservable } from 'mobx';

export default class AdvertisementStore {
  constructor() {
    this._advertisement = [];
    this._comments = [];
    this._users = [];
    this._completedAgreements = [];
    this._agreementsLength = 0;
    makeAutoObservable(this);
  }

  setAdvertisement(advertisements) {
    this._advertisement = advertisements;
  }

  setComments(comments) {
    this._comments = comments;
  }

  pushComment(comment) {
    this._comments.push(comment);
  }

  clearComments() {
    this._comments = [];
  }

  setUser(users) {
    this._users = users;
  }

  pushAgreement(agreement) {
    this._completedAgreements.push(agreement);
  }

  clearAgreements() {
    this._completedAgreements = [];
  }

  setAgreements(agreements) {
    this._completedAgreements = agreements;
  }

  setLength(len) {
    this._agreementsLength = len;
  }

  incrementLength() {
    this._agreementsLength++;
  }

  decrementLength() {
    this._agreementsLength--;
  }

  get advertisements() {
    return this._advertisement;
  }

  get comments() {
    return this._comments;
  }

  get users() {
    return this._users;
  }

  get completedAgreements() {
    return this._completedAgreements;
  }

  get agreementsLength() {
    return this._agreementsLength;
  }
}
