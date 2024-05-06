import { service } from '@ember/service';
import ApplicationRoute from '../application';

export default class UserBooksRoute extends ApplicationRoute {
  @service store;

  async model(params) {
    //  return  await this.store.findRecord('user-book', localStorage.getItem('user_id'));
    return this.store.findAll('user-book', { user_id: params.user_id });
  }
}
