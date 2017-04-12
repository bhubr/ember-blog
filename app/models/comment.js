import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr(),
  comment: DS.attr(),
  email: DS.attr(),
  website: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  author: DS.belongsTo('user'),
  post: DS.hasMany('post')
});