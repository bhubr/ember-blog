import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model(params) {
    console.log('user.profile route', this.get('session').userId);
    // return this.get('session.user');
    return this.get('session').retrieveSession()
  }
});
