import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  router: Ember.inject.service('-routing'),

  init() {
    this._super(...arguments);
    console.log(this.get('post'));
    // this.createPostIfNew();
  },

  didUpdateAttrs() {
    this._super(...arguments);
    // this.createPostIfNew();
  },

  // createPostIfNew() {
  //   if(this.get('post') === undefined) {
  //     this.set('post', this.get('store').createRecord('post', { title: 'New Post' }));
  //   }
  // },

  redirectAfterSave(post) {
    console.log(post);
    this.get('router').transitionTo('post.edit', [post.id]);
  },

  actions: {
    createOrUpdate() {
      const post = this.get('post');
      console.log(this.get('selectedTags'));
      this.get('selectedTags').forEach(tag => {
        console.log('bind tag',tag);
        post.get('tags').pushObject(tag);
      });

      post.save()
      .then(this.redirectAfterSave.bind(this));
    }
  }
});