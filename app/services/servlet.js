import AjaxService from 'ember-ajax/services/ajax';
export default AjaxService.extend({
  namespace: '/api',
values(data) {
      //ToDo: need to make the request properly and hit the proper servlet
    return this.request('/samplemodels1', {
      method: 'GET',
      data:data
    }).then((response) => {
      return response.data;
      
    }).catch(() => {
      return undefined;
    });
  },




});