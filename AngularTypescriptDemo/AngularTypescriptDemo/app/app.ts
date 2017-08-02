module app {
    var main = angular.module("messageDemo",
        ["ngRoute"]);

    main.config(routeConfig);

    routeConfig.$inject = ["$routeProvider"];

    function routeConfig($routeProvider: ng.route.IRouteProvider): void {

        $routeProvider            
            .when('/messageList',
            {
                templateUrl: 'app/views/messageListView.html',
                controller: 'MessageListCtrl as ml'
            })
            .when('/addMessage',
            {
                templateUrl: 'app/views/addMessage.html',
                controller: 'AddMessageCtrl as am'
            })            
            .otherwise('/messageList');
    }
}


 