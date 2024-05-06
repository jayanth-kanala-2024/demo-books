import Service from '@ember/service';
import { service } from '@ember/service';

export default class LocaleService extends Service {
  @service api;
  @service router;

  LANG_URL = 'http://localhost:3000/i18n';
  translations;

  getTranslations() {
    this.translations = JSON.parse(localStorage.getItem('translation'));
    return this.translations;
  }

  getTranslation(key) {
    this.getTranslations();
  }

  async setDefaultLocale() {
    let currentLocale = localStorage.getItem('locale');
    let newLocale = localStorage.getItem('newLocale');
    if (!currentLocale) {
      await this.changeLang('en');
    } else if (currentLocale != newLocale) {
      this.changeLang(newLocale);
    }
  }

  async changeLang(lang) {
    localStorage.setItem('locale', lang);
    this.api.addHeaders({
      'Accept-Language': localStorage.getItem('locale'),
    });
    const out = await this.api.get(this.LANG_URL);
    localStorage.setItem('translation', JSON.stringify(out));
    localStorage.setItem('newLocale', lang);
    this.router.refresh();
    this.translations = out;
  }
}
