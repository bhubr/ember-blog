import Ember from 'ember';
import RSVP from 'rsvp';
import request from 'ember-ajax/request';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  actions: {
    getLocalRepositories() {
      const self = this;
      return request('/api/v1/sync-local-repositories', {
        method: 'GET'
      })
      .then(response => self.get('store').findAll('repository'))
      .then(repositories => { self.set('model.localRepositories', repositories); });
    },
    getRemoteRepositories(accountId) {
      const self = this;
      console.log('getRemoteRepositories', accountId);
      const account = this.get('model.accounts').findBy('id', accountId);
      if(accountId === undefined) {
        return;
      }
      return request('/api/v1/misc/sync-remote-repositories/' + accountId, {
        method: 'GET'
      })
      .then(response => self.get('store').findAll('remoteProject'))
      .then(records => {
        console.log(account.get('remoteProjects'));
        return records.findBy('account', account);
      })
      .then(console.log);
      // .then(response => self.get('store').findAll('repository'))
      // .then(repositories => { self.set('model', repositories); });
    }
  }
});
