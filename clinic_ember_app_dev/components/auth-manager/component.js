import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

export default Ember.Component.extend({
  //store: Ember.inject.service(),
  authentication: Ember.inject.service(),
  actions: {
    toggleLogin(){
      Ember.$("#login-content").toggle("fast");
    },
    logoutUser(){
      console.log("logoutUser triggered");
      this.get('session').invalidate();
    },
    loginUser(){
      // this.set('session.store.cookieExpirationTime', expirationTime);

      // var store = this.get('store');
      // var newUser = store.createRecord('authenticate', {
      //   username: this.get('username'),
      //   password: this.get('password')
      // });
      // newUser.save()
      // .then(function(user){
      //   console.log("User: " + user);
      //   //Ember.$("#login").fadeOut("slow");
      //   //var x = this.store.findRecord('authenticate', 1);
      //   //this.store.peekRecord('authenticate', 1);
      //   // this.store.pushPayload(newPatient);
      //   // this.transitionTo('thank-you');
      //   Cookies.set('clinic_id', user.clinic_id);
      //   Cookies.set('username', user.username);
      //   Cookies.set('token', user.token);
      //   Cookies.set('user_id', user.id);
      //   this.transitionToRoute('register');
      // })
      // .catch(function(error){ // handle the error
      //   console.log("ERROR: " + error);
      //   Cookies.remove("token");
      // });

      ////////////////////////////////////////////////
      ////////////////////////////////////////////////
      ////////////////////////////////////////////////

      // console.log(this.setCookie('token') + " cookie token" );
      // this.setCookie('token', data.me.token)
      // .then(function() {
      //   self.transitionToRoute('register');
      //   console.log("login successful!");
      //   this.transitionToRoute('register');
      // });

      ////////////////////////////////////////////////
      ////////////////////////////////////////////////
      ////////////////////////////////////////////////

      // console.log("username: " + this.get('username'));
      // console.log("password: " + this.get('password'));
      var comp = this;

      return Ember.$.ajax({
			  type: "POST",
			  url: 'http://api.box.clinic/api/v1/sessions/authenticate',
			  crossDomain: true,
			  data: {
				  "username": this.get('username'),
				  "password": this.get('password')
			  }
      }).then(function(data){
        Cookies.set('username', data.username);
        Cookies.set('token', data.token);
        Cookies.set('clinic_id', data.clinic_id);
        Cookies.set('user_id', data.id);
        comp.set('authentication.loggedIn', true);
        comp.send('toggleLogin');
        comp.get('router').transitionTo('register');

        // console.log("username " + data.username);
        // console.log("token " + data.token);
        // console.log("clinic_id " + data.clinic_id);
        // console.log("user_id" + data.id);
        // console.log(data);
      })
      .fail(function(err) {
        console.log("There was an error authenticating:", err);
        comp.set('authentication.loggedIn', false);
      });

      // .ajaxError(function(){
      //   console.log("error");
      // });
      // .catch(function(error) { // handle the error
      //   console.log("ERROR: " + error);
      //   console.log(error);
      //   console.error(error);
      //   Cookies.remove("token");
      // });
    }
  }
});
