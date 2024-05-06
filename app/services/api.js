import Service from '@ember/service';
import { service } from '@ember/service';

const HEADERS = {
  'Content-Type': 'application/json',
};

export default class ApiService extends Service {
  @service auth;

  #getAuthHeader() {
    let token = localStorage.getItem('token');
    let out = {};
    if (token) {
      out = { Authorization: 'Bearer ' + token };
    }
    return out;
  }

  addHeaders(headers) {
    Object.assign(HEADERS, {}, headers);
  }

  async post(url, body) {
    const response = await fetch(url, {
      method: 'post',
      headers: { ...this.#getAuthHeader(), ...HEADERS },
      body,
    });
    return await response.json();
  }

  async get(url) {
    const response = await fetch(url, {
      method: 'get',
      headers: { ...this.#getAuthHeader(), ...HEADERS },
    });
    return await response.json();
  }
}
