import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model(params) {
    return this.get('session').retrieveSession();
  }
});
