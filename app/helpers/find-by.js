// app/helpers/find-by .js

import Ember from 'ember';

export default Ember.Helper.helper(function([collection, attrName, attrValue]) {
  return collection.find(el => Ember.get(el, attrName) === attrValue);
});