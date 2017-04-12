// app/helpers/find-by .js

import Ember from 'ember';

export default Ember.Helper.helper(function([collection, item]) {
  console.log('has-item', collection, item);
  return collection.indexOf(item) === -1 ? '' :
    Ember.String.htmlSafe('<i class="tiny material-icons">done</i>');
});