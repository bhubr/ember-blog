import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),
  postTags: null,
  init() {
    this._super(...arguments);
    this.set('userFollower', null);
    this.postTags = Ember.ArrayProxy.create({ content: Ember.A([])});
  },
  actions: {
  	onSubmit: function() {
      const departure = this.get('departure');
      const arrival = this.get('arrival');
  		const date = this.get('date');
  		const user = this.get('session.user');
      const ride = this.get('store').createRecord('ride', { departure, arrival, date, user });
      ride.save();
  	},

    subPost: function() {
      const title = this.get('pTitle');
      const content = this.get('pContent');
      const tags = this.get('postTags');
      // const author = this.get('session.user');
      const authorId = this.get('pAuthorId');
      const post = this.get('store').createRecord('post', { title, content });
      const author = this.get('store').peekRecord('user', authorId);
      post.set('author', author);

      tags.forEach(tag => {
        post.get('tags').pushObject(tag);
      });
      
      post.save();
    },

    subTag: function() {
      const name = this.get('tName');
      const tag = this.get('store').createRecord('tag', { name });
      tag.save();
    },

    subCarMake: function() {
      const name = this.get('cmName');
      const carMake = this.get('store').createRecord('carMake', { name });
      carMake.save();
    },

    foo: function() {
      console.log(arguments);
    },

    subCar: function() {
      const name = this.get('cName');
      const makeId = this.get('cMakeId');
      const ownerId = this.get('cOwnerId');
      const make = this.get('store').peekRecord('car-make', makeId);
      const owner = this.get('store').peekRecord('user', ownerId);
      console.log(make);
      const car = this.get('store').createRecord('car', { name });
      make.get('cars').pushObject(car);
      car.set('owner', owner);
      console.log(car);
      car.save().then(car => {
        console.log('after save', car.get('id'));
        console.log(car);
        owner.set('car', car);
        owner.save();
      });
    }
  }
});