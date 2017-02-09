(function(){
	'use strict';
	angular
    .module('app')
    .factory('Api', Api);
    Api.$inject = ['Restangular', '$log'];

    function Api(Restangular) {
        return {
            latestChapters: function(query){
                return Restangular.all("chaptersp").getList(query);
            },
            comicsList: function(query){
                return Restangular.all("comics").getList(query);
            },
            getComic: function(query){
                return Restangular.one("comic").get(query);
            }
        }
    }
})();