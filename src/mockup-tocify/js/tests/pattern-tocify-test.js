define([
  'expect',
  'jquery',
  'pat-registry',
  'mockup-patterns-tocify',
], function(expect, $, registry, tocify) {
  'use strict';

  window.mocha.setup('bdd');
  $.fx.off = true;

  describe('tocify', function () {

    afterEach(function() {
      $('body').empty();
    });

    it('Just works.', function() {

      var $doc = $('<div class="pat-tocify"></div>').appendTo('body');
      registry.scan($doc);

      setTimeout(function () {
        // wait for two seconds, until all is settled.
        // TODO: use event listener instead.
        var $el = $('.pat-tocify');
         // TODO: Test goes here
      }, 2000);

    });

  });
});
