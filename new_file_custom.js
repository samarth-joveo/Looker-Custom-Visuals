//Plain HTML : 
looker.plugins.visualizations.add({
    create: function(element, config) {
    },
    updateAsync: function(data, element, config, queryResponse, details, done) {
      
  element.innerHTML = `
       <style>
  .borderStyle{
  border: 1px solid #EAECF0;
  border-radius: 12px;
  padding-top: 26px;
  padding-left: 56px;
  
  }
  .componentOne {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  }
  .componentTwo {
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  padding-top: 5px;
  padding-bottom: 5px;
  }
  .componentThree {
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 60px;
  }
  </style>
  </head>
  <body>
  
  
  
  <div class="borderStyle">
  <div class="componentOne">Spend</div>
  <div class="componentTwo">$ Clicks</div>
  <div class="componentThree">27.1% of budget cap $7500</div>
  <div class="componentOne">Projected Spend</div>
  <div class="componentTwo">$ 6245.55</div>
  <div class="componentThree">99.3% of budget cap $7500</div>
  </div>
    `;
      
      //var firstRow = data[0];
      //var firstCell = firstRow[queryResponse.fields.dimensions[0].name];
  
      
  
  //element.innerHTML = clicks_total
      
      done()
  
    }
  })