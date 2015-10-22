/* Tocifypattern
*
* Options:
*    context(string): Any valid jQuery selector. ("body")
*    selectors(string): The selectors used to build the table of contents. ("h1,h2,h3")
*    showAndHide(boolean): Expand and collapse sub headings. (true)
*    showEffect(string): "none", "fadeIn", "show", or "slideDown", or any of the other jQuery show effects. ("slideDown")
*    showEffectSpeed(string or integer): "slow", "medium", "fast", or milliseconds. ("medium")
*    hideEffect(string): "none", "fadeOut", "hide", "slideUp", or any of the jQuery hide effects. ("none")
*    hideEffectSpeed(string or integer): "slow", "medium", "fast" or milliseconds. ("medium")
*    smoothScroll(boolean): true or false. (true)
*    smoothScrollSpeed(string or integer): Accepts Number (milliseconds) or String: "slow", "medium", or "fast". ("medium")
*    scrollTo(integer or function): Accepts any number of pixels or function. (0)
*    showAndHideOnScroll(boolean): true or false. (true)
*    highlightOnScroll(boolean): true or false. (true)
*    highlightOffset(number): Accepts any number of pixels. (40)
*    theme(string): The theme "bootstrap", "jqueryui", or "none". ("bootstrap")
*    extendPage(boolean): true or false. (true)
*    extendPageOffset(integer): Any number of pixels. (100)
*    history(boolean): true or false (true)
*    hashGenerator(string or function): "compact", "pretty", function(text, element){}. Compact - #CompressesEverythingTogether. Pretty - #looks-like-a-nice-url-and-is-easily-readable. function(text, element){} - Your own hash generation function that accepts the text as an argument, and returns the hash value. ("compact")
*    highlightDefault(boolean): true or false. (true)
*    ignoreSelector(string): Any valid jQuery selector. (null)
*    scrollHistory(boolean): true or false. (false)
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
