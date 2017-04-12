import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  	onSubmit: function() {
      const user = this.get('user');
  		user.save();
  	}
  }
});