import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  color: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  posts: DS.hasMany('post')
});