import Route from '@ember/routing/route';
import { service } from '@ember/service';
import ApplicationRoute from '../application';

export default class BooksEditRoute extends ApplicationRoute {
  @service store;

  async model(params) {
    return await this.store.findRecord('book', params.book_id);
  }
}
