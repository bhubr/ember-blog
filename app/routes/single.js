import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model(params) {
    console.log('single post', params.slug, this.modelFor('index'));
    return this.get('store').query('post', { slug: params.slug })
    .then(records => records.objectAt(0));
  }
});
