import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    //return this.store.findAll('service');
    return this.store.findRecord('service', params.service_id);
  }
});
