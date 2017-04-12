import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  init() {
    this._super(...arguments);
    this.set('selected', Ember.ArrayProxy.create({ content: Ember.A([])}));
  },
  actions: {
    select: function(user) {
      console.log('select', user);
      if(this.get('selected').indexOf(user) === -1) {
        this.get('selected').pushObject(user);
      }
      else {
        this.get('selected').removeObject(user);
      }
      console.log(this.get('selected').content);
    },
    associateFollowees() {
      console.log('associateFollowees');
      const currentUserId = this.get('currentUserId');
      const currentUser = this.get('store').peekRecord('user', currentUserId);
      console.log(currentUser);
      this.get('selected').forEach(followee => {
        currentUser.get('followees').pushObject(followee);
      });
      currentUser.save();
      this.set('selected', Ember.ArrayProxy.create({ content: Ember.A([])}));
    }
  }
});