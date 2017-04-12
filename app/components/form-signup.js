import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  init() {
    this._super(...arguments);
  },
  actions: {
  	onSubmit: function() {
      const firstName = this.get('firstName');
      const lastName = this.get('lastName');
  		const email = this.get('email');
  		const password = this.get('password');
      console.log(firstName, lastName, email, password);
  		this.get('session').doSignup(firstName, lastName, email, password);
  	}
  }
});