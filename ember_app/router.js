import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function(){
  this.route('login');
  this.route('logout');
  this.route('waitlist');
  this.route('clinic');
  this.route('setup');
  this.route('checkout');
  this.route('notify');
  this.route('user');
  this.route('setup');
  this.route('register');

  this.route('sessions', function() {
    this.route('authenticate');
  });
  this.route('register', function() {
    this.route('edit', {path: '/:patient_id'});
    this.route('service-history', {path: '/:patient_id/service_history'});
    this.route('loading');
  });
  this.route('assessment', function() {
    this.route('lookup', {path: '/:patient_id'});
  });
  // example
  // this.route("patients", { path: "/" }, function() {
  //   this.route("detail", { path: "/:account_id" }, function() {
  //     this.route("users", { path: "/users" });
  //   });
  // });
  this.route('service', function() {
    this.route('list', {path: '/:service_id'});
    this.route('checkin', {path: '/:service_id/checkin'});
    this.route('checkout', {path: '/:service_id/checkout'});
    this.route('message', {path: '/:service_id/send_message'});
    this.route('called', {path: '/:service_id/move_to_called'});
  });


  // this.route('', function() {
  //   this.route('register', function() {
  //     this.route('loading');
  //   });
  // });
});

export default Router;
