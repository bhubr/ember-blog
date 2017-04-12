import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/v1',
  session: Ember.inject.service('session'),
  headers: Ember.computed('session.jwt', function() {
    return {
      Authorization: 'Bearer ' + this.get('session.jwt'),
    };
  })
});
