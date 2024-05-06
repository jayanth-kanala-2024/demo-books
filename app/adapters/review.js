// app/adapters/comment.js
import ApplicationAdapter from './application';

export default class ReviewAdapter extends ApplicationAdapter {
  urlForCreateRecord(modelName, snapshot) {
    let baseUrl = this.buildURL(); // Get the base URL from the adapter
    let bookId = snapshot.belongsTo('book').id; // Get the ID of the associated book
    return `${baseUrl}/books/${bookId}/reviews`;
  }
}
