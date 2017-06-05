import Ember from 'ember';

export default Ember.Route.extend({
model(params){
let content=this.modelFor('iconHome')
let boxContent={};  
content.forEach(function(item) {
  if(params.box_id===item.id)
    {
      boxContent=item;
    }
});
return boxContent;
}

});
