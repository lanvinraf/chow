define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'scripts/views/global/searchBarView'
], function ($, _, Backbone, JST, SearchBarView) {
  'use strict';

  var MainView = Backbone.View.extend({

    initialize: function () {
      // Search Bar
      this.searchBar = new SearchBarView({
        el: $('#searchBar')
      });

    }

  });
  return MainView;
});