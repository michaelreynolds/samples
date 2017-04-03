import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // let patient = this.modelFor('patient');
    // this.get('adapterContext').setContext({patient});
    // console.log(this.get('adapterContext'));
    //this.set('adapterContext.patient', params.patient);

    console.log(params.patient_id);
    return this.store.findRecord('patient', params.patient_id);
  }
});
