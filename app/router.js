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
  this.route('ride', function() {
  	this.route('mine');
  	this.route('add');
  });
  this.route('post', function() {
    this.route('new');
    this.route('edit', { path: '/:id' });
  });
  this.route('user', function() {
    this.route('stuff', { path: '/:id/stuff' });
  });
  this.route('tracker', function() {
    this.route('accounts', function() {
      this.route('new');
      this.route('edit', { path: '/:id' });
    });
    this.route('sync');
    this.route('repositories');
    this.route('projects');
    this.route('issues');
    this.route('timers');
  });
  this.route('auth.login');
});

export default Router;
