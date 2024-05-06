import JSONAPISerializer from '@ember-data/serializer/json-api';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class WantReadComponent extends Component {
  @service api;
  @service store;
  @service router;

  @action
  async updateStatus(status, book_id, shelf_id) {
    let user_id = localStorage.getItem('user_id');
    let userBook = await this.store.queryRecord('user-book', {
      user_id: user_id,
      book_id: book_id,
    });
    if (userBook) {
      userBook.set('status', status);
      userBook.set('book_id', book_id);
    } else {
      userBook = this.store.createRecord('user-book', {
        book_id,
        status,
      });
    }
    try {
      await userBook.save();
      this.router.refresh();
    } catch (error) {
      console.log(error, error.errors);
    }
  }
}
