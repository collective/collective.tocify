/* Tocifypattern

 */

define([
  'pat-base',
  'jquery',
  'tocify'
], function (Base, $) {
  'use strict';


  var Tocify = Base.extend({
    name: 'tocify',
    trigger: '.pat-tocify',  // has to be exact like this: 'pat-' + patternname.
    parser: 'mockup',
    defaults: {
      "selectors": "h2, h3",
      "showAndHide": true
    },
    init: function () {
      var self = this;
      self.$el.tocify(self.options);
    }
  });
  return Tocify;
});
