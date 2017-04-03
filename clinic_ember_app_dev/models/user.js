import DS from 'ember-data';

export default DS.Model.extend({
  user_id:        DS.attr('string'),
  clinic_id:      DS.belongsTo("clinic"),
  username:       DS.belongsTo("authenticate"),
  password:       DS.belongsTo("authenticate"),
  token:          DS.belongsTo("authenticate")
});
