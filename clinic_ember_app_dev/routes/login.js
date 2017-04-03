import Ember from 'ember';
//import Cookies from 'ember-cli-js-cookie';

export default Ember.Route.extend({
  // beforeModel() {
  //   if (!Cookies.get('token')) {
  //     return RSVP.reject();
  //   }
  // }
  // loginUser() {
  //   Ember.$.ajax({
  //     type: "POST",
  //     url: 'sessions/authenticate',
  //     crossDomain: true,
  //     data: {
  //       "username": this.get('username'),
  //       "password": this.get('password')
  //     }
  //   }).then(function(data){
  //     Ember.username = data.me.username;
  //     Ember.token = data.me.token;
  //     Ember.clinic_id = data.me.clinic_id;
  //     Ember.user_id = data.me.id;
  //     console.log(data);
  //     Cookies.set('username', data.me.username);
  //     Cookies.set('token', data.me.token);
  //     Cookies.set('clinic_id', data.me.clinic_id);
  //     Cookies.set('user_id', data.me.id);
  //
  //     // console.log(Ember.username);
  //     // console.log(Ember.token);
  //     // console.log(Ember.clinic_id);
  //
  //     //ember.Component.auth.saveLogin()
  //
  //
  //
  //   });
  //}
});
