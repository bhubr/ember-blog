import Ember from 'ember';

export default Ember.Component.extend({
  selected: Ember.ArrayProxy.create({ content: Ember.A([])}),
  init() {
    this._super(...arguments);
    console.log('tag-selector init');
    console.log(this.selected);
  },
  selectedString: Ember.computed('selected', function() {
    // return 'pouet';
    return this.selected.reduce((previous, tag) => { console.log(tag.get('name')); return previous + ',' + tag.get('name') }, '');
  }),
  actions: {
  	select: function(tag) {
      // console.log(tag.get('name'));
      if(this.selected.indexOf(tag) === -1) {
        this.selected.pushObject(tag);
      }
      else {
        this.selected.removeObject(tag);
      }
      console.log(this.selected.content);
  	}
  }
});