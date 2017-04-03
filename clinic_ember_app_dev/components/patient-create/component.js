import Ember from 'ember';

export default Ember.Component.extend({
  authentication: Ember.inject.service(),
  store: Ember.inject.service(),
  ///////////////////////////////////////////////////////
  // tagName: 'input',
  // attributeBindings: [ 'type', 'value', 'placeholder', 'data-stripe', 'name' ],
  // type: 'text',
  // _sanitizedValue: undefined,
  // input() { this._handleChangeEvent(); },
  // change() { this._handleChangeEvent(); },
  // _handleChangeEvent() {
  //   let value = this.readDOMAttr('value');
  //   this._processNewValue.call(this, value);
  // },
  // _processNewValue(rawValue) {
  //   let value = this.sanitizeInput(rawValue);
  //
  //   if (this._sanitizedValue !== value) {
  //     this._sanitizedValue = value;
  //     this.attrs.update(value);
  //   }
  // },
  // sanitizeInput: function(input) {
  //   return input;
  // },
  // didReceiveAttrs: function() {
  //   if (!this.attrs.update) {
  //     throw new Error(`You must provide an \`update\` action to \`{{${this.templateNam}}}\`.`);
  //   }
  //   this._processNewValue.call(this, this.get('value'));
  // },
  ///////////////////////////////////////////////////////
  actions: {
    pressed(){
      this.$("tr").fadeIn("slow");
    },
    createPatient(){
      var store = this.get('store');
      var newPatient = store.createRecord('patient', {
        // id: counter,
        // public_number: 100000 + counter,
        // clinic_id: 1,
        // age: 23,
        // first_name: "Joe",
        // last_name: "Dewy",
        // mobile_number: "+19837678900",
        // dob: "1967-09-09",
        // gender: "M",
        // address_1: "4059 E Walnut Ave",
        // city: "Ventura",
        // state: "CA",
        // zip: "93002"

      	first_name: this.get('first_name'),
      	last_name: this.get('last_name'),
      	mobile_number: this.get('mobile_number'),
      	dob: this.get('dob'),
      	gender: this.get('gender'),
      	address_1: this.get('address_1'),
      	city: this.get('city'),
      	state: this.get('state'),
      	zip: this.get('zip')
      });
      newPatient.save()//.then(saveNewPatient).catch(failure);
      .then(function(){ // Success callback
        if (generateCode39Barcode( newPatient.id.toString(), "#barcode")){
          console.log("printed lable");
          window.print();
          //window.onafterprint=function(){myScript};
          window.addEventListener("afterprint", function(){
            console.log("after print");
            newPatient = null;
          });

        } else {
          console.log('failed to generate barcode');
        }
      },function(error){ // Error callback
        console.log("ERROR: " + error);
        alert("error saving new patient");
        //this.transitionToRoute('posts.show', post);
      });

      // record.set('name', 'Tomster');
      // record.save().then(function() {
      //   // Success callback
      // }, function() {
      //   // Error callback
      // });

      newPatient.save(newPatient).catch(function(error) {
        console.log(error);
      });
    },
    createPost: function (model) {
      let post = this.store.createRecord('post', {
        title: model.title,
        text: model.text,
        author: model.author,
        createdDate: new Date()
      });
      post.save();
    },
  }
});


// export default DS.RESTAdapter.extend({
//   actions: {
//     createPatient() {
//       return Ember.$.ajax({
// 			  type: "POST",
// 			  url: 'http://api.box.clinic/api/v1/me/patients',
// 			  crossDomain: true,
// 			  data: {
//         	"first_name": this.get('firstname'),
//         	"last_name": this.get('lastname'),
//         	"mobile_number": this.get('mobile_number'),
//         	"dob": this.get('dob'),
//         	"gender": this.get('gender'),
//         	"address_1": this.get('address'),
//         	"city": this.get('city'),
//         	"state": this.get('state'),
//         	"zip": this.get('zip')
//         }
//       }).then(function(data){
//           console.log(data);
//           // $("#label").empty();
//           // $("#label").append(
//           // 		"<p>" + data.first_name + " " + data.last_name + "</p>" +
//           // 		"<p>" + data.address_1 + "</p>" +
//           // 		"<p>" + data.city + ", " + data.state + " "+ data.zip + "</p>" +
//           // 		"<p>" + data.age + "yrs • "  + data.dob + " • " + data.gender + "</p>" +
//           // 		"<p>" + data.mobile_number + "</p><div id='barcode'></div>");
//           //generateCode39Barcode( data.public_number.toString(), "#barcode");
//           console.log(data.public_number.toString());
//           console.log(data.public_number);
//           window.print();
//       });
//     }
//   },
//   createPatient(patient){
//     let newPatient = this.store.createRecord(
//       'patient', {
//         first_name: patient.firstname,
//         last_name: patient.lastname,
//         mobile_number: patient.mobile_number,
//         dob: patient.dob,
//         gender: patient.gender,
//         address_1: patient.address,
//         city: patient.city,
//         state: patient.state,
//         zip: patient.zip
//       });
//     newPatient.save();
//   }
// });
