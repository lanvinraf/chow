define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'scripts/views/global/searchBarView',
  'scripts/views/content/resultsTableView'
], function ($, _, Backbone, JST, SearchBarView, ResultsTableView) {
  'use strict';

  var MainView = Backbone.View.extend({

    initialize: function () {
      // Search Bar
      this.searchBar = new SearchBarView({
        el: $('#searchBar')
      });
      this.resultsTable = new ResultsTableView({
        el: $('#resultsTable')
      });
    }

  });
  return MainView;
});