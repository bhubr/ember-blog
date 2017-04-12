import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  init() {
    this._super(...arguments);
  },
  model(params) {
    return RSVP.hash({
      post: this.get('store').createRecord('post', { title: 'New Post' }),
      tags: this.modelFor('post').tags,
      user: this.get('session').retrieveSession()
      // selectedTags: Ember.ArrayProxy.create({ content: Ember.A([])})
    });
  }
});
