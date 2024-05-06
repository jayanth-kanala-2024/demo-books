import Model from '@ember-data/model';
import { attr, belongsTo } from '@ember-data/model';

export default class ReviewModel extends Model {
  @attr('string') reviewer_name;
  @attr('string') comment;
  @attr('number') rating;
  @attr('boolean') deleted;

  @belongsTo('book', { async: true, inverse: 'reviews' }) book;
}
