import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    console.log('tracker.accounts.edit route', params.id)
    return this.modelFor('tracker.accounts').findBy('id', params.id);
  }
});
