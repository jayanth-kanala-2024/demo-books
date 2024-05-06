import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-data/model';

export default class BookModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('string') author;
  @attr('string') contributor;
  @attr('string') publisher;
  @attr('number') price;
  @attr('string') isbn10;
  @attr('string') isbn13;
  @attr('string') file;
  @attr('string') coverImage;
  @attr created_at;
  @attr created_at_formatted;

  @hasMany('review', { async: true, inverse: 'book' }) reviews;
  // @hasMany('user', { async: true, inverse: 'books'}) users;
  @hasMany('user-book', { async: true, inverse: 'book' }) userBooks;
}
