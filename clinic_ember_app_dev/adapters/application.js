// import Ember from 'ember';
// import DS from 'ember-data';
// import Cookies from 'ember-cli-js-cookie';
// import CookieStore from 'ember-simple-auth/session-stores/cookie';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend();

export default DS.JSONAPIAdapter.extend({
  host: 'https://api.box.clinic',
  namespace: Ember.computed(function(){
    if(Cookies.get('token') === undefined){
      return"api/v1/sessions";
    }
    else {
      return"api/v1/me";
    }
  }),
  dataType: "json",
	crossDomain: true,
  headers: Ember.computed(function(){
    return {
      'X-Auth-Token': Cookies.get('token'),
      'Content-Type': 'application/json'
    };
  }).volatile()
});
