import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  status: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});