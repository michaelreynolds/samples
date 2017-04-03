import Ember from 'ember';

export default Ember.Component.extend({
	authentication: Ember.inject.service(),
	loggedIn: Ember.computed.alias('authentication.loggedIn')
});
