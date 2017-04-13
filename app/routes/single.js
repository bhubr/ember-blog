import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  model(params) {
    return RSVP.hash({
      post: this.get('store').query('post', { slug: params.slug })
        .then(records => records.objectAt(0)),
      user: this.get('session').retrieveSession()
    });
  }
});
