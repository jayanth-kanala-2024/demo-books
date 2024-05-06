import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

export default class BooksAddComponent extends Component {
  @tracked errors = {};
  @service form;
  @service router;
  fileData = '';

  handleFileSelected(eleID) {
    let file = document.getElementById(eleID).files[0];
    if (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });
    } else {
      return Promise.resolve();
    }
  }

  @action
  async saveBook(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = this.form.formDataToObject(formData);

    const fileData = await this.handleFileSelected('coverImage');
    if (fileData) {
      data.file = fileData;
    }
    console.log(fileData);

    let book = await this.form.getRequestModalData('book', data);
    try {
      await book.save();
      e.target.reset();
      this.router.transitionTo('books.show', book.id);
    } catch (error) {
      console.log(error, error.errors);
    }
  }
}
