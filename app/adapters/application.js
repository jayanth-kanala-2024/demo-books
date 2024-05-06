import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { computed } from '@ember/object';
import { service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service router;
  @service auth;

  host = 'http://localhost:3000';

  get headers() {
    let headers = {};
    const authToken = `Bearer ${localStorage.getItem('token')}`; // Replace 'your_auth_token' with your actual token
    if (authToken) {
      headers['Authorization'] = authToken;
    }
    headers['Content-Type'] = 'application/json';
    headers['Accept-Language'] = localStorage.getItem('locale') || 'en';
    return headers;
  }

  async handleResponse(status, headers, payload, requestData) {
    if (401 === status && !payload.isAuthenticated) {
      this.auth.clearData();
      this.router.transitionTo('auth/login');
    }

    return super.handleResponse(status, headers, payload, requestData);
  }
}
