import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model() {
  	return this.get('store').findAll('post');
  }
});
