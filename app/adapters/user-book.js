// app/adapters/comment.js
import ApplicationAdapter from './application';

export default class UserBookAdapter extends ApplicationAdapter {
  urlForCreateRecord(modelName, snapshot) {
    let baseUrl = this.buildURL(); // Get the base URL from the adapter
    let userId = localStorage.getItem('user_id'); // Get the ID of the associated book
    return `${baseUrl}/users/${userId}/books`;
  }

  urlForFindAll(modelName, snapshot) {
    let baseUrl = this.buildURL(); // Get the base URL from the adapter
    let userId = localStorage.getItem('user_id'); // Get the ID of the associated book
    return `${baseUrl}/users/${userId}/books`;
  }

  urlForFindRecord(id, modelName, snapshot) {
    let baseUrl = this.buildURL(); // Get the base URL from the adapter
    let userId = localStorage.getItem('user_id'); // Get the ID of the associated book
    let book_id = snapshot.belongsTo('book').id;
    return `${baseUrl}/users/${userId}/books/${book_id}`;
  }
  urlForUpdateRecord(id, modelName, snapshot) {
    let baseUrl = this.buildURL(); // Get the base URL from the adapter
    let book_id = snapshot.belongsTo('book').id;
    let userId = localStorage.getItem('user_id'); // Get the ID of the associated book
    return `${baseUrl}/users/${userId}/books/${book_id}`;
  }
  urlForQueryRecord(query, modelName) {
    let baseUrl = this.buildURL(); // Get the base URL from the adapter
    let userId = localStorage.getItem('user_id'); // Get the ID of the associated book
    return `${baseUrl}/users/${userId}/books/${query.book_id}`;
  }
}
