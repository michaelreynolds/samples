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
      console.log(patient.id);
      // console.log(this.get('patient').patient.id);
      return null;
    },
    delete(patient){
      //modal confirmation box
      // this.store.findRecord('patient', patient.id).then(function() {
      // this.store.destroyRecord(); // => DELETE
      // });
      // this.store.findRecord('patient', patient.id).then(function(patient) {
      //   post.destroyRecord(); // => DELETE to /posts/2
      // });
      // this.store.findRecord('patient', patient.id).then(function(patient) {
      //   patient.destroyRecord(); // => DELETE to /posts/2
      // });

      // Ember.$('.full-overlay').removeClass('slideInRight').addClass('slideOutRight');
      //   Ember.run.later(()=> {
      //     this.controllerFor('application').set('showFullOverlay', false);
      //   }, 750);

      console.log(patient.id);
      return null;
    },
    reprint(patient){
      //modal reprint box
      console.log(patient.id);
      // patient.public({someData: 'abc'}).then(response => {
      //   // do something when the API returns a response
      // });

      return null;
    }
  }
});
