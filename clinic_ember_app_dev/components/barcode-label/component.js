import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    reprint(patient_id){
      if (generateCode39Barcode( patient_id, "#barcode")){
        console.log("printed lable");
        window.print();
        window.addEventListener("afterprint", function(){
          console.log("after print");
        });
      } else {
        console.log('failed to generate barcode');
      }
    }
  }
});
