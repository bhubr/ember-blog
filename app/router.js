import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('auth', function() {
    this.route('signin');
    this.route('signup');
  });
  this.route('post', function() {
    this.route('new');
    this.route('edit', { path: '/:id' });
  });
  this.route('user', function() {
    this.route('profile', { path: '/:username/profile' });
    this.route('posts', { path: '/:username/posts' });
  });
  this.route('single', { path: '/:slug' });
  this.route('contact');
  // this.route('index');
});

export default Router;
