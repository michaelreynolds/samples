import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return Ember.RSVP.hash({
        patient: this.store.findAll('patient'),
        service: this.store.findAll('service')
      });
    }
});
