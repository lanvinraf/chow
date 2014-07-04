define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  '../../helpers/api'
], function ($, _, Backbone, JST, API) {
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

    search: function (evt) {
      evt.preventDefault();
      var query = $('.searchInput').val();
      Backbone.trigger('searchBegin', query);
      var request = API.search(query);
      request.done(function (data) {
        Backbone.trigger('searchResults', data);
      });
    }

  });
  return SearchBarView;
});