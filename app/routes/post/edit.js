import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  init() {
    this._super(...arguments);
  },
  model(params) {
    console.log('post.edit route', params.id)
    return RSVP.hash({
      post: this.modelFor('post').posts.findBy('id', params.id), //Record('post', params.id),
      tags: this.modelFor('post').tags,
      user: this.get('session').retrieveSession(),
      // selectedTags: Ember.ArrayProxy.create({ content: Ember.A([{}])})
    })
    .then(res => {console.log(res);return res;});
  }
});
