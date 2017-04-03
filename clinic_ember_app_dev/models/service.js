import Ember from 'ember';
import DS from 'ember-data';
// import { memberAction } from 'ember-api-actions';

export default DS.Model.extend({
  // send_message:     memberAction({path: 'send_message'}),
  // move_to_called:   memberAction({path: 'move_to_called'}),
  // checkout:         memberAction({path: 'checkout'}),
  // checkin:          memberAction({path: 'checkin'}),
  status:           DS.attr('string'),
  elapsed_time:     DS.attr('string'),
  check_in:         DS.attr('date'),
  check_out:        DS.attr('date'),
  patient:       	  DS.belongsTo('patient'),
  category:         DS.hasMany('category')
});


// {
//   "id": 2,
//   "status": "checked_in",
//   "check_in": "2016-03-28T18:50:34.423Z",
//   "check_out": null,
//   "elapsed_time": null,
//   "patient_id": 100010,
//   "category": {
//     "id": 1,
//     "name": "Cleanings",
//     "code": "CLEANING",
//     "position": 1,
//     "created_at": "2016-01-29T23:28:57.610Z",
//     "updated_at": "2016-01-29T23:28:57.610Z"
//   }
// }
