import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    signout() {
      this.get('session').doSignout();
    }
  }
});