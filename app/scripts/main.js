'use strict';

require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    }
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    bootstrap: 'vendor/bootstrap',
    localstorage: '../bower_components/Backbone.localStorage/backbone.localStorage'
  }
});

require([
  'jquery',
  'underscore',
  'backbone',
  'scripts/views/global/mainView'
], function ($, _, Backbone, MainView) {

  new MainView();

});


//   $('.searchButton').on('click', function (evt) {
//     evt.preventDefault();
//     var value = $('.searchText').val();
//     search(value);
//     $('.recipeTable tbody').empty();
//   });

//   function search(term) {
//     var request = $.ajax({
//       url: 'http://ec2-54-236-110-252.compute-1.amazonaws.com/api/search',
//       type: 'GET',
//       data: {format: 'json', query: term}
//     });

//     request.done(function (data) {
//       var fn = data.foodnetwork;
//       _.each(fn, function (recipe) {
//         var title = '<a href="'+recipe.link+'">'+recipe.title+'</a>';
//         var score = recipe.score;
//         var reviews = recipe.reviews;
//         var row = '<tr>'+
//                     '<td>'+title+'</td>'+
//                     '<td>'+score+'</td>'+
//                     '<td>'+reviews+'</td>'+
//                   '</tr>';
//         $('.recipeTable tbody').append(row);
//       });
//     });
//     request.fail(function (error) {
//     });
//   }
