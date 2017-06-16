export default function() {
  this.namespace = '/api';
  this.get('/samplemodels1', function(db,request) {
  let idmodel=[
    {
    id: '1',
    attributes: 
      {
        article: 'Article one',
        type: 'Solid',
        rating: 5
      }
    }, {
    id: '2',
    attributes: 
      {
        article: 'Article two',
        type: 'Liquid',
        rating: 1
      }
    }, {
    id: '3',
    attributes: 
      {
        article: 'Article three',
        type: 'Gas',
        rating: 4
      }
    },  
    {
    id: '4',
    attributes: 
      {
        article: 'Article four',
        type: 'Solid',
        rating: 3
      }
    },
     {
    id: '5',
    attributes: 
      {
        article: 'Article five',
        type: 'Liquid',
        rating: 2
      }
    },
     {
    id: '6',
    attributes: 
      {
        article: 'Article six',
        type: 'Solid',
        rating: 5
      }
    }, {
    id: '7',
    attributes: 
      {
        article: 'Article seven',
        type: 'Liquid',
        rating: 1
      }
    }, {
    id: '8',
    attributes: 
      {
        article: 'Article eight',
        type: 'Gas',
        rating: 4
      }
    },  
    {
    id: '9',
    attributes: 
      {
        article: 'Article nine',
        type: 'Solid',
        rating: 3
      }
    },
     {
    id: '10',
    attributes: 
      {
        article: 'Article ten',
        type: 'Liquid',
        rating: 2
      }
    }

  ];
  let dropdownId = request.queryParams.id;
  let dropdownType = request.queryParams.type;
  if((dropdownId!=undefined)){
    let selectedVal = idmodel.filter(function(item){
      return item.id == dropdownId;
    });
    return {data: selectedVal};
  }
  else if((dropdownType!=undefined)){
    let selectedVal = idmodel.filter(function(item){
      return item.attributes.type == dropdownType;
    });
    selectedVal.sort(function(item1,item2){
      return item1.attributes.rating < item2.attributes.rating;
    });
    return {data: selectedVal};
  }
  else{
    let sortedVal=idmodel.sort(function(item1,item2){
      return item1.attributes.rating < item2.attributes.rating;
  }); 
    return {data: sortedVal};
  }
  });
}