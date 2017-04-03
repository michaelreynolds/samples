import Ember from 'ember';

export default Ember.Component.extend({
  cleaningPatients: Ember.computed.filter('patients', function(patient) {
    console.log("patient:", patient);
    let services = patient.get('services');
    console.log("services:", services);
    return service.category.code === 'CLEANING';
  }),
  fillingPatients: Ember.computed.filter('patients', function(patient) {
    let service = patient.get('services').get('firstObject');
    return services.get('category.code') === 'FILLINGS';
  }),
  rootCanalPatients: Ember.computed.filter('patients', function(patient) {
    let services = patient.get('services');
    return services.sortBy('id').get('firstObject').get('category.code') === 'ROOTCANALS';
  }),
  extractionPatients: Ember.computed.filter('patients', function(patient) {
    let services = patient.get('services');
    return services.sortBy('id').get('firstObject').get('category.code') === 'EXTRACTIONS';
  }),
  actions: {
    called(patient_id){
      console.log(patient_id);
    },
    checkin(patient_id){
      console.log(patient_id);
    }
  }
});
