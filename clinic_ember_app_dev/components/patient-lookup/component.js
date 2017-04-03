import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
      setService(patient){
        console.log(patient + " setService");
      },
      getPatient(patient_id){
        console.log("getPatient " + patient_id);
        this.get('router').transitionTo('assessment.lookup', patient_id);
      },
      listenBarcode(){
        // from: www.deadosaurus.com/detect-a-usb-barcode-scanner-with-javascript
        var self = this;
        console.log('triggered listenBarcode');
        Ember.$(document).ready(function() {
          var pressed = false;
          var chars = [];
          Ember.$(window).keypress(function(e) {
            if (e.which >= 48 && e.which <= 57) {
              chars.push(String.fromCharCode(e.which));
            }
            console.log(e.which + ":" + chars.join("|"));
            if (pressed === false) {
              setTimeout(function(){
                if (chars.length === 6) {
                  var barcode = chars.join("");
                  console.log("Barcode Scanned: " + barcode);
                  self.get('router').transitionTo('assessment.lookup', barcode);
                }
                chars = [];
                pressed = false;
              }, 300);
            }
            pressed = true;
          });
        });
        // Ember.$("#barcode").keypress(function(e){
        //     if ( e.which === 13 ) {
        //         console.log("Prevent form submit.");
        //         e.preventDefault();
        //     }
        // });
      }
    },
    didInsertElement(){
      this.send('listenBarcode');
    }
});






//
// import Ember from 'ember';
//
// export default Ember.Component.extend({
//     actions: {
//       alertUser(){
//         alert("alertUser");
//       }
//     },
//     init() {
//       this.triggerAction({
//         action: 'alertUser'
//       });
//     },
//     didInsertElement(){
//       this.triggerAction({
//         action: 'alertUser'
//       });
//     }
// });


  // actions: {
  //   createPost: function (model) {
  //     let post = this.store.createRecord('post', {
  //       title: model.title,
  //       text: model.text,
  //       author: model.author,
  //       createdDate: new Date()
  //     });
  //     post.save();
  //   },
  //this.store.queryRecord('patient', 100157, { key: public_number });




  // from adapters/patient.js
  //import DS from 'ember-data';
  // import ApplicationAdapter from './application';
  //
  // export default ApplicationAdapter.extend({
  //   buildURL: function(modelName, id, snapshot, requestType, query) { //,
  //     console.log(this._super(modelName, id, snapshot, requestType, query));
  //     return this._super(modelName, id, snapshot, requestType, query);
  //   },
  //   dataType: "json",
  //   crossDomain: true
  // });
