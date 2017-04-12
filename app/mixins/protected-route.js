import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel() {
    this.get('session').retrieveSession()
  	.then(user => {
      console.log('user null?', user, user === null);
      if(user===null) {
        this.transitionTo('auth.signin');
      }
    })
  	.catch(err => { this.transitionTo('auth.signin'); });
  }
});