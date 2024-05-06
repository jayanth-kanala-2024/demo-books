import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') email;
  @attr('string') author;
  @attr('string') role;
  @attr('date') created_at;
  @attr('string') created_at_formatted;

  // @hasMany('book', { async: true,  inverse:'user' }) books;
  @hasMany('user-book', { async: true, inverse: 'user' }) userBooks;
}
