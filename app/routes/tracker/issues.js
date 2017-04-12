import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
  	return RSVP.hash({
      accounts: this.get('store').findAll('account'),
      projects: Ember.ArrayProxy.create({ content: Ember.A([])})
    });
  }
});
