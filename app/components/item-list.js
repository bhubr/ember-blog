import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'ul',
	className: 'collection',
  actions: {
    delete(item) {
      this.get('items').removeObject(item);
      item.destroyRecord();
    }
  }
});