define([
  'jquery',
  'underscore',
  'backbone',
  'templates'
], function ($, _, Backbone, JST) {
  'use strict';

  var ResultsTableView = Backbone.View.extend({
    template: JST['app/scripts/templates/content/resultsTable.ejs'],

    initialize: function (params) {
      this.listenTo(Backbone, 'searchResults', this.render);
    },

    render: function (data) {
      this.$el.html(this.template({rows: data.foodnetwork}));
    }

  });
  return ResultsTableView;
});