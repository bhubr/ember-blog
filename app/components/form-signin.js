import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  init() {
    this._super(...arguments);
  },
  actions: {
  	onSubmit: function() {
  		const email = this.get('email');
  		const password = this.get('password');
  		this.get('session').doSignin(email, password);
  	}
  }
});