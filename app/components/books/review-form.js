import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class BooksReviewFormComponent extends Component {
  @service form;
  @service router;
  @service store;

  @action
  async saveReview(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.assign({}, this.form.formDataToObject(formData), {
      book: this.args.book,
    });
    const review = this.store.createRecord('review', data);
    try {
      await review.save();
      e.target.reset();
      this.router.refresh();
    } catch (error) {
      console.log(error, error.errors);
    }
  }
}
