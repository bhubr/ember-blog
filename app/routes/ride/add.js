import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  init() {
    this._super(...arguments);
  },
  model() {
  	return RSVP.hash({
      tags: this.get('store').findAll('tag'),
      posts: this.get('store').findAll('post'),
      users: this.get('store').findAll('user'),
      carMakes: this.get('store').findAll('car-make'),
      session: this.modelFor('application')
    });
  }
});
