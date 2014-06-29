define(function(){

this["JST"] = this["JST"] || {};

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