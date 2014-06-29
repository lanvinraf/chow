define([
  'jquery',
  'underscore',
  'backbone',
  'templates'
], function ($, _, Backbone, JST) {
  'use strict';

  var SearchBarView = Backbone.View.extend({
    template: JST['app/scripts/templates/global/searchBar.ejs'],

    events: {
      'click .searchButton': 'search'
    },

    initialize: function (params) {
      this.render();
    },

    render: function () {
      this.$el.html(this.template());
    },

    search: function () {
      var query = $('.searchInput').val();
      Backbone.trigger('search', query);
    }

  });
  return SearchBarView;
});