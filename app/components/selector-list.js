import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  // selected: Ember.ArrayProxy.create({ content: Ember.A([])}),
  init() {
    this._super(...arguments);
    // this.set('selected', );
    console.log(this.get('selected'));
  },
  actions: {
    select: function(item) {
      console.log('select', item);
      if(this.get('selected').indexOf(item) === -1) {
        this.get('selected').pushObject(item);
      }
      else {
        this.get('selected').removeObject(item);
      }
      console.log(this.get('selected').content);
      this.notifyPropertyChange('selected');
    },
    // associateFollowees() {
    //   console.log('associateFollowees');
    //   const currentUserId = this.get('currentUserId');
    //   const currentUser = this.get('store').peekRecord('item', currentUserId);
    //   console.log(currentUser);
    //   this.get('selected').forEach(followee => {
    //     currentUser.get('followees').pushObject(followee);
    //   });
    //   currentUser.save();
    //   this.set('selected', Ember.ArrayProxy.create({ content: Ember.A([])}));
    // }
  }
});