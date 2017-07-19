/* globals store */
import Ember from 'ember';
import RSVP from 'rsvp';
import request from 'ember-ajax/request';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  loggedIn: false,
  user: null,
  jwt: '',

  init() {
    this._super(...arguments);
  },

  retrieveSession() {
    const localSessionData = store.get('jsonApiEmberSession');
    console.log('session data', localSessionData);
    if(localSessionData !== undefined) {
      this.set('jwt', localSessionData.jwt);
      return this.fetchUser(localSessionData.userId);
    }
    else {
      return new RSVP.Promise(function(resolve, reject) {
        console.log('no session');
        resolve(null);
      });
    }
  },

  fetchUser: function(id) {
    return this.get('store').findRecord('user', id)
    .then(user => {
      this.set('loggedIn', true);
      this.set('user', user);
      return user;
    });
    // .catch(err => {
    //   this.set('err', err);
    // });
  },

  doSignin: function(email, password) {
    const data = { attributes: { email, password } };
    return request('/api/v1/signin', {
      method: 'POST',
      data: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/vnd.api+json; charset=utf-8",
      }
    }).then(response => {
      const { userId, jwt } = response.data;
      console.log(userId, jwt);
      if (store.get('jsonApiEmberSession')) {
        console.log('update store data');
        store.transact('jsonApiEmberSession', function(value) {
          value.userId = userId;
          value.jwt = jwt;
        });
      }
      else {
        console.log('set store data');
        store.set('jsonApiEmberSession', { userId, jwt });
      }
      this.set('jwt', jwt);
      return userId;
    })
    .then(this.fetchUser.bind(this));
  },

  doSignup: function(firstName, lastName, username, email, password) {
    const data = { firstName, lastName, username, email, password };
    const user = this.get('store').createRecord('user', data);
    user.save()
    .then(user => this.doSignin(email, password));
    // .then(this.fetchUser.bind(this));
  },

  doSignout: function() {
    console.log('out');
    store.remove('jsonApiEmberSession');
    this.set('loggedIn', false);
    this.set('jwt', '');
    this.set('user', null);
  }
});
