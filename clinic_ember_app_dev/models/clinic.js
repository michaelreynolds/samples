import DS from 'ember-data';

export default DS.Model.extend({
  name:                 DS.attr('string'),
  code:                 DS.attr('string'),
  position:             DS.attr('number'),
  category_clinics:     DS.hasMany('category')
});



// {
// "id": 1,
// "name": "El Monte",
// "code": "ELS",
// "category_clinics": [
//   {
//     "category_id": 1,
//     "number": 5,
//     "category_code": "CLEANING"
//   },
//   {
//     "category_id": 2,
//     "number": 5,
//     "category_code": "FILLINGS"
//   },
//   {
//     "category_id": 3,
//     "number": 5,
//     "category_code": "ROOTCANALS"
//   },
//   {
//     "category_id": 4,
//     "number": 5,
//     "category_code": "EXTRACTIONS"
//   }
// ]
// },
