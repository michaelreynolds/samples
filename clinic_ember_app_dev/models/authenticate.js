import DS from 'ember-data';

export default DS.Model.extend({
  username:     DS.attr('string'),
  password:     DS.attr('string'),
  token:        DS.attr('string'),
  clinic_id:    DS.attr('string')
});
