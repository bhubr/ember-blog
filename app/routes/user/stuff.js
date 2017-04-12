import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  init() {
    this._super(...arguments);
  },
  model(params) {
  	return this.get('store').findRecord('user', params.id);
  }
});
