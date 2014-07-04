define([
  'jquery',
  'underscore'
], function ($, _) {
  'use strict';

  var API = {
    baseURL: 'http://ec2-54-236-110-252.compute-1.amazonaws.com',

    search: function (term) {
      return $.ajax({
        url: this.baseURL + '/api/search',
        type: 'GET',
        data: {format: 'json', query: term}
      });
    }


  };
  return API;
});