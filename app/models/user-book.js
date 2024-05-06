import Model from '@ember-data/model';
import { attr, belongsTo } from '@ember-data/model';

export default class UserBookModel extends Model {
  @belongsTo('user', { async: true, inverse: 'userBooks' }) user;
  @belongsTo('book', { async: true, inverse: 'userBooks' }) book;
  @attr('string') status;
  @attr('string') book_id;
}
