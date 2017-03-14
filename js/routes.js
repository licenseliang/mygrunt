define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/mySeckill', {
            templateUrl: 'views/myseckill.html',
            controller: 'mySeckillCtrl'
        });

       

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);
});