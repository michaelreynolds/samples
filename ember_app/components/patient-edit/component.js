import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    edit(patient){
      //modal edit box
      //console.log(patient.attrs.patient);
      // console.log(patient.get('public_number'));
      // console.log(this.get('public_number'));
      //console.log(boxclinic@model:patient:);
      //console.log(this.get('patient').patient.id);
      console.log(patient);
      // this.store.findRecord('patient', patient.id).then(function(update) {
      //   update.set('firstName',"Yollo");
      // });
    }
  }
});
