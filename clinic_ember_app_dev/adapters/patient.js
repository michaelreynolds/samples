// import Ember from 'ember';
import ApplicationAdapter from './application';
import UrlTemplates from "ember-data-url-templates";

export default ApplicationAdapter.extend(UrlTemplates, {
  namespace: 'api/v1/me',
  host: 'https://api.box.clinic',
  urlTemplate:              "{+host}/{+namespace}/patients/{id}",
  findAllUrlTemplate:       "{+host}/{+namespace}/patients/",
  createRecordUrlTemplate:  "{+host}/{+namespace}/patients/",
  deleteRecordUrlTemplate:  "{+host}/{+namespace}/patients/{id}",
  updateRecordUrlTemplate:  "{+host}/{+namespace}/patients/{id}",
  findRecordUrlTemplate:    "{+host}/{+namespace}/patients/{id}",

  urlSegments: {
    patientId(type, id) {
      return id;
    }
  }
});

// findRecord()
// createRecord()
// updateRecord()
// deleteRecord()
// findAll()
// query()
// findMany()
// findAll()


// urlTemplate:
// createRecordUrlTemplate:
// deleteRecordUrlTemplate:
// find -----------------
// findAllUrlTemplate:
// findRecordUrlTemplate:
// other -----------------
// findBelongToUrlTemplate:
// findHasManyUrlTemplate:
// findManyUrlTemplate:
// search -----------------
// queryUrlTemplate:
// queryRecordUrlTemplate:
// put -----------------
// updateRecordUrlTemplate:
