const CryptoJS = require('crypto-js');

const key = process.env.REACT_APP_CRYPTO_KEY;
const moduleId = process.env.REACT_APP_MODULEID;

export default class UserStore {
  static clearStorageData() {
    console.log('Clear Everything');
    sessionStorage.clear();
    localStorage.clear();
  }

  static setSessionStorageItem(name, value) {
    return sessionStorage.setItem(name, this.encryptJsonData(value));
  }

  static getSessionStorageItem(name) {
    return this.decrypt(sessionStorage.getItem(name));
  }

  static clearSessionStorageData() {
    sessionStorage.clear();
  }

  static setLocalStorageItem(name, value) {
    return localStorage.setItem(name, this.encryptJsonData(value));
  }

  static getLocalStorageItem(name) {
    return this.decrypt(localStorage.getItem(name));
  }

  static clearLocalStorageData() {
    localStorage.clear();
  }

  static encryptJsonData(data) {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), key);
    return ciphertext;
  }

  static decrypt(data) {
    if (!data) return null;
    try {
      // if (!data || data === 'null') return null;
      const bytes = CryptoJS.AES.decrypt(data.toString(), key);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    } catch (err) {
      // sessionStorage.clear();
      return null;
    }
  }

  static refreshTime(time) {
    let rtime = time;
    if (!time) rtime = new Date().getTime();
    sessionStorage.setItem('refreshtime', rtime);
    return rtime;
  }

  static getLastRefresh() {
    sessionStorage.removeItem('init');
    const refreshtime = sessionStorage.getItem('refreshtime');
    if (refreshtime) return parseInt(refreshtime, 10);
    return new Date().getTime();
  }

  static setActiveLocation(locationId) {
    return localStorage.setItem(
      'activeLocation',
      this.encryptJsonData(locationId)
    );
  }

  static getActiveLocation() {
    try {
      // return localStorage.getItem('activeLocation');
      return this.decrypt(localStorage.getItem('activeLocation'));
    } catch (error) {
      return 0;
    }
  }

  static getOrganisationId() {
    try {
      return this.getUserDetails().organisationId;
    } catch (error) {
      return 0;
    }
  }

  static setUserDetails(user) {
    return localStorage.setItem('userDetails', this.encryptJsonData(user));
  }

  static getUserDetails() {
    return this.decrypt(localStorage.getItem('userDetails'));
  }

  static setRights(entities = []) {
    return localStorage.setItem('entities', this.encryptJsonData(entities));
  }

  static getRights() {
    if (localStorage.entities) {
      const entities = this.decrypt(localStorage.getItem('entities'));
      if (entities[moduleId]) return entities[moduleId];
    }
    return [];
  }

  static encryptToHex(data) {
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      key
    ).toString();
    const cipherb64Text = CryptoJS.enc.Base64.parse(ciphertext);
    const cipherHex = cipherb64Text.toString(CryptoJS.enc.Hex);
    return cipherHex;
  }

  static decryptFromHex(cipherHex) {
    const reb64Text = CryptoJS.enc.Hex.parse(cipherHex);
    const bytes = reb64Text.toString(CryptoJS.enc.Base64);
    const decryptText = CryptoJS.AES.decrypt(bytes, key);
    const plainText = JSON.parse(decryptText.toString(CryptoJS.enc.Utf8));
    return plainText;
  }
}
