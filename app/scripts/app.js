(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
            
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'RoomCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }
    
    angular
        .module('bloc-chat', ['firebase', 'ui.router', 'ui.bootstrap', 'ngCookies'])
        .config(config);
})();

/* Original version
(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
            
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'RoomCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }
    
    angular
        .module('bloc-chat', ['firebase', 'ui.router'])
        .config(config);
})();
*/