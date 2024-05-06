import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
// import { LOGIN_URL } from 'freshbooks/constants'

export default class AuthLoginComponent extends Component {
  @service router;
  @service auth;
  @service api;
  @service locale;
  // translations
  // constructor() {
  //   super(...arguments)
  //   this.translations = this.locale.getTranslation('loginForm')
  // }

  @tracked errors = {};

  LOGIN_URL = 'http://localhost:3000/auth/login';

  @action
  async login(e) {
    e.preventDefault();
    this.errors = {};
    const data = new FormData(e.target);
    const body = JSON.stringify({
      email: data.get('email'),
      password: data.get('password'),
    });
    const out = await this.api.post(this.LOGIN_URL, body);
    if (out.error) {
      this.errors = out.message;
    } else {
      e.target.reset();
      this.auth.setData(out.data[0]);
      this.router.transitionTo('books');
    }
  }
}
