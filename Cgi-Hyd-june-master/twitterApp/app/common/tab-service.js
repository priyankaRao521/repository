angular.module("twitterApp")
.service('tabService',function($http){
    
    this.getTabs=function(){
        return $http.get('app/common/tabs.json');
    }
});