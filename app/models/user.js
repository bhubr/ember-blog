import DS from 'ember-data';

export default DS.Model.extend({
	firstName: DS.attr(),
	lastName: DS.attr(),
  username: DS.attr(),
	email: DS.attr(),
	password: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  posts: DS.hasMany('post'),
  comments: DS.hasMany('comment'),
  followers: DS.hasMany('user', { inverse: 'followees' }),
  followees: DS.hasMany('user', { inverse: 'followers' }),
  name: Ember.computed('firstName', 'lastName', () => {
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});