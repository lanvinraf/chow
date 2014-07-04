define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/content/resultsTable.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<table class="table table-striped table-bordered recipeTable">\n  <thead>\n    <tr>\n        <th>Title</th>\n        <th>Score</th>\n        <th>Reviews</th>\n    </tr>\n    ';
 _.each(rows, function (row) { ;
__p += '\n    \t<tr>\n    \t\t<td><a href="' +
((__t = ( row.link )) == null ? '' : __t) +
'">' +
((__t = ( row.title )) == null ? '' : __t) +
'</a></td>\n    \t\t<td>' +
((__t = ( row.score )) == null ? '' : __t) +
'</td>\n    \t\t<td>' +
((__t = ( row.reviews )) == null ? '' : __t) +
'</td>\n    \t</tr>\n    ';
 }); ;
__p += '\n  </thead>\n  <tbody>\n  </tbody>\n</table>\n';

}
return __p
};

this["JST"]["app/scripts/templates/global/searchBar.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="form-search">\n    <input type="text" class="input-medium search-query searchInput">\n    <button type="submit" class="btn searchButton">Search</button>\n</form>';

}
return __p
};

  return this["JST"];

});