import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params.patient_id);
    return this.store.findRecord('patient', params.patient_id);
  }
});
