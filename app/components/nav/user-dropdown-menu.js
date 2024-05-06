import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class NavUserDropdownMenuComponent extends Component {
  @service router;
  @service auth;
  @service api;

  @tracked errors = {};

  LOGOUT_URL = 'http://localhost:3000/auth/logout';

  @action
  async logout(e) {
    e.preventDefault();
    this.errors = {};
    const body = JSON.stringify({});
    const out = await this.api.post(this.LOGOUT_URL, body);
    let location;
    if (out.error) {
      this.errors = out.message;
      if (out.error && !out.isAuthenticated) {
        location = '/auth/login';
      }
    } else {
      location = '/';
    }
    this.auth.clearData();
    this.router.transitionTo(location);
    this.router.refresh();
  }
}
