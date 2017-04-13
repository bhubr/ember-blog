import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel() {
    this.get('session').retrieveSession()
  	.then(user => {
      console.log('user null?', user, user === null);
      if(user===null) {
        this.transitionTo('auth.signin');
      }
    })
  	.catch(err => { this.transitionTo('auth.signin'); });
  },
  model() {
  	return this.get('session');
  }
});
