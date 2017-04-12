import Ember from 'ember';
import ProtectedRouteMixin from '../../mixins/protected-route';

export default Ember.Route.extend(ProtectedRouteMixin, {
  session: Ember.inject.service(),
  model() {
  	return Ember.ArrayProxy.create({ content: Ember.A([])});
  }
});
