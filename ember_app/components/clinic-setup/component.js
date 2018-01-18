import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    createClinic(){
      var store = this.get('store');
      var newClinic = store.createRecord('clinic', {
        name: this.get('clinic_name'),
        code: this.get('clinic_code'),
        position: this.get('position')
      });
      newClinic.save().then(function() {
        //empty form
      });
    }
  }
});
