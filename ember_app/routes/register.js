import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('patient')
    	.then(patients => {
    		return patients.filterBy('status', 'registered');
    	});
  }
});
