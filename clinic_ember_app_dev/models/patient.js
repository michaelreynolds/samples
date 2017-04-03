import DS from 'ember-data';

export default DS.Model.extend({
    clinic_id:        DS.belongsTo('clinic'),
    status:           DS.attr('string'),
    first_name:       DS.attr('string'),
    last_name:        DS.attr('string'),
    mobile_number:    DS.attr('string'),
    email:            DS.attr('string'),
    dob:              DS.attr('string'),
    gender:           DS.attr('string'),
    address_1:        DS.attr('string'),
    city:             DS.attr('string'),
    state:            DS.attr('string'),
    zip:              DS.attr('string'),
    age:              DS.attr('number'),
    services:         DS.hasMany('service')
});

// {
// "id":100013,
// "clinic_id":8,
// "first_name":"Test",
// "last_name":"Example",
// "mobile_number":"+19999999999",
// "email":null,
// "dob":"1990-01-01",
// "gender":"M",
// "address_1":"100 Example St",
// "city":"Ventura",
// "state":"CA",
// "zip":"93002",
// "age":25
// }
