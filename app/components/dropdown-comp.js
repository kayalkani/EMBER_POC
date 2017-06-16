import Ember from 'ember';
const articleType=[
  {type:"Solid"},
  {type:"Liquid"},
  {type:"Gas"}
];

export default Ember.Component.extend({
  store: Ember.inject.service('servlet'), 
  init(){
    this._super(...arguments);
    let store = this.get('store');
    
    store.values().then((response) => {
      this.set('contentData', response);

      this.set('articleId', response.sortBy('id'));
      
    });        
  },   
  articleType:articleType,
  actions: {
    changeOption(selected) { 
    this.set('selected',selected);     
    let store = this.get('store');
    store.values(selected).then((response) => {      
      this.set('contentData', response);      
    });
    },
  }
});





