import Ember from 'ember';
import ApplicationAdapter from './application';
import UrlTemplates from "ember-data-url-templates";

export default ApplicationAdapter.extend(UrlTemplates, {
  namespace: 'api/v1/me',
  host: '[redacted]',
  urlTemplate:              "{+host}/{+namespace}/services/{id}",
  createRecordUrlTemplate:  "{+host}/{+namespace}/services/",
  deleteRecordUrlTemplate:  "{+host}/{+namespace}/services/{id}",
  updateRecordUrlTemplate:  "{+host}/{+namespace}/services/{id}",
  findRecordUrlTemplate:    "{+host}/{+namespace}/patients/{id}",

  urlSegments: {
    patientId(type, id, snapshot) {
      return snapshot.get('patient.id');
    }
  }
});
