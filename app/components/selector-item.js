import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  isSelected: Ember.computed('selected.@each', 'item', function() {
    return this.get('selected').indexOf(this.get('item')) !== -1;
  })
});