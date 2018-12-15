define(['ojs/ojcore'], function(oj) {
  'use strict';

  var PageModule = function PageModule() {};
  
  PageModule.prototype.showSide = function() {
    var offcanvas = {
      "selector": "#startDrawer",
      "content": "#page",
      "edge": "start",
      "displayMode": "push",
      "size": "300px"
    };
 
    oj.OffcanvasUtils.open(offcanvas);
  }

  return PageModule;
});