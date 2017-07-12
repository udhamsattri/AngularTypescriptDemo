var app;
(function (app) {
    var main = angular.module("messageDemo", ["ngRoute"]);
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/messageList', {
            templateUrl: 'app/views/messageListView.html',
            controller: 'MessageListCtrl as ml'
        })
            .when('/addMessage', {
            templateUrl: 'app/views/addMessage.html',
            controllerAs: 'AddMessageCtrl as am'
        })
            .otherwise('/messageList');
    }
})(app || (app = {}));
