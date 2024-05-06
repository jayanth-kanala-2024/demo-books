import EmberRouter from '@ember/routing/router';
import config from 'freshbooks/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // public
  this.route('about');
  this.route('contact');
  this.route('auth/login');
  this.route('auth/signup');
  this.route('auth/logout');

  // protected
  this.route('books', function () {
    this.route('show', { path: '/:book_id' }, function () {
      this.route('reviews');
    });
    this.route('add');
    this.route('edit', { path: '/edit/:book_id' });
    this.route('manage');
  });

  this.route('user', { path: '/users/:user_id' }, function () {
    this.route('books', function () {});
  });
});
