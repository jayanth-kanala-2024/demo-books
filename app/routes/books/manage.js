import Route from '@ember/routing/route';
import { service } from '@ember/service';
import ApplicationRoute from '../application';

export default class BooksManageRoute extends ApplicationRoute {
  @service store;

  async model() {
    return await this.store.findAll('book');
  }
}
