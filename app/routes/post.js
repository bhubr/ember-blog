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
      posts: this.get('store').findAll('post')
    });
  }
});
