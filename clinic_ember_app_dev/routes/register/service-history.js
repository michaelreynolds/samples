import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log(params.patient_id);
    console.log(params);

    return this.store.queryRecord('patient', params.patient_id, {endpoint: 'service_history'});
  }
});
