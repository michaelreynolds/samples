import DS from 'ember-data';

export default DS.Model.extend({
  name:       DS.attr('string'),
  code:       DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  upcoming_services: DS.belongsTo('service')
});


//     "id": 1,
//     "name": "Cleanings",
//     "code": "CLEANING",
//     "position": 1,
//     "created_at": "2016-01-29T23:28:57.610Z",
//     "updated_at": "2016-01-29T23:28:57.610Z"
