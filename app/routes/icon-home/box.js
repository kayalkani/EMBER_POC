import Ember from 'ember';

export default Ember.Route.extend({
model(params){
  let content=this.modelFor('iconHome')
  let boxContent=content.findBy("id",params.box_id)||{};
  return boxContent;
}
});
