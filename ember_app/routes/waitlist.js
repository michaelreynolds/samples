import Ember from 'ember';

export default Ember.Route.extend({
  // queryParams: {
  //   service: {
  //     refreshModel: true
  //   }
  // },
  // model() {
  //   return this.store.findAll('patient');
  //   // console.log(this.store.find('patient', "100157", null, "GET", '/public_number'));
  //   // return this.store.find('patient', "100157", null, "GET", '/public_number');
  // }
  model() {
    return this.store.findAll('patient')
      .then(patients => {
        return patients.filterBy('status', 'new');
      });
  }
});
