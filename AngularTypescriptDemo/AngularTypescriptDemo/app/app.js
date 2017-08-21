var app;
(function (app) {
    var main = angular.module("messageDemo", ["ngRoute", "ngAria"]);
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
            controller: 'AddMessageCtrl as am'
        })
            .when('/accessibility', {
            templateUrl: 'app/views/accessibility.html',
            controller: 'AccessibilityCtrl as acs'
        })
            .otherwise('/messageList');
    }
})(app || (app = {}));
