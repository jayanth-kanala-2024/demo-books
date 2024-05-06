import Service from '@ember/service';
import { service } from '@ember/service';

export default class AuthService extends Service {
  constructor() {
    super();
    this.initalize();
  }

  isAuthenticated = false;
  name = '';
  email = '';
  user_id = '';
  token = '';
  role = '';
  hostUrl = 'http://localhost:3000/';

  @service api;

  initalize() {
    const items = this.#getLocalStorage();
    this.setData(items);
  }

  #getLocalStorage() {
    return { ...localStorage };
  }

  has(key) {
    return undefined !== this[key];
  }

  get(key) {
    return this[key];
  }

  setData(data) {
    for (const key in data) {
      if (this.has(key)) {
        this[key] = data[key];
        localStorage.setItem(key, this[key]);
      }
    }
  }

  clearData() {
    const items = this.#getLocalStorage();
    for (const key in items) {
      if (this.has(key)) {
        this[key] = '';
        localStorage.removeItem(key);
      }
    }
  }

  get isAdmin() {
    return 'admin' == localStorage.getItem('role');
  }
}
