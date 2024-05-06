import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class LanguageComponent extends Component {
  @service router;
  @service locale;

  @action
  async changeLang(lang) {
    localStorage.setItem('newLocale', lang);
    this.router.refresh();
  }
}
