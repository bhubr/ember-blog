import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  slug: DS.attr(),
  content: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  author: DS.belongsTo('user'),
  tags: DS.hasMany('tags')
});