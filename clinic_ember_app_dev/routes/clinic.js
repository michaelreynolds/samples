import Ember from 'ember';
// import Cookies from 'ember-cli-js-cookie';

export default Ember.Route.extend({
  // beforeModel() {
  //   if(Cookies.get('token') !== undefined){
  //     this.transitionToRoute('register');
  //     // .then(function() {
  //     //   this.transitionToRoute('register');
  //     // });
  //   }
  // },
  model(){
    return this.store.findAll('clinic');
  }

});
