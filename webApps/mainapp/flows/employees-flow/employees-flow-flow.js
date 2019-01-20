define([], function() {
  'use strict';

  var FlowModule = function FlowModule() {};

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  FlowModule.prototype.prepareSearchQueryParams = function (q1, q2, q3, q4, q5, q6) {
    if (!q1.value) {
      q1.value = '';
    }
    if (!q2.value) {
      q2.value = '';
    }
    if (!q3.value) {
      q3.value = '';
    }
    if (!q4.value) {
      q4.value = '';
    }
    if (!q5.value) {
      q5.value = '';
    }
    if (!q6.value) {
      q6.value = '';
    }
    var res = [q1, q2, q3, q4, q5, q6];
    
    return res;
  };

  return FlowModule;
});