import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    getPatient(patient_id){
      console.log("getPatient " + patient_id);
      this.get('router').transitionTo('assessment.lookup', patient_id);
    }
  }
});
