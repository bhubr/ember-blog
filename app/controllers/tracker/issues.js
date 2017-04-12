import Ember from 'ember';
import RSVP from 'rsvp';
import request from 'ember-ajax/request';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  accountIdChanged: Ember.observer('accountId', function() {
    const accountId = this.get('accountId');
    // deal with the change
    // console.log(`accountId changed to: ${this.get('accountId')}`);
    this.get('store').query('remoteProject', { accountId })
    .then(records => {
      console.log(records);
      this.set('model.projects', records);
    });
  }),
  actions: {
    getIssues(accountId, projectSlug) {
      console.log(accountId, projectSlug);
      const self = this;
      return request('/api/v1/misc/sync-issues/' + accountId + '/' + projectSlug, {
        method: 'GET'
      })
      .then(response => {
        this.set('model.issues', response.data);
      });
    }
  }
});
