/* Tocifypattern
*
* Options:
*    selectors(string): The selectors used to build the table of contents.
*
* Documentation:
*   # Tocify
*
*   This pattern creates a table of contents using jquery.tocify.js
*   (see http://gregfranko.com/jquery.tocify.js for more information about
*   tocify).
*
*   # Default text example
*
*   {{ example-1 }}
*
*   # Custom options example
*
*   {{ example-2 }}
*
* Example: example-1
*    <div class="pat-tocify"></div>
*
* Example: example-2
*    <div class="pat-tocify" data-pat-tocify='{"selectors": "h2, h3"}'></div>
*
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
      context: "body",
      selectors: "h1,h2,h3",
      showAndHide: true,
      showEffect: "slideDown",
      showEffectSpeed: "medium",
      hideEffect: "none",
      hideEffectSpeed: "medium",
      smoothScroll: true,
      smoothScrollSpeed: "medium",
      scrollTo: 0,
      showAndHideOnScroll: true,
      highlightOnScroll: true,
      highlightOffset: 40,
      theme: "bootstrap",
      extendPage: true,
      extendPageOffset: 100,
      history: true,
      hashGenerator: "compact",
      highlightDefault: true,
      ignoreSelector: null,
      scrollHistory: false
    },
    init: function () {
      var self = this;
      self.$el.tocify(self.options);
    }
  });
  return Tocify;
});
