var app;
(function (app) {
    var services;
    (function (services) {
        var MessageService = (function () {
            function MessageService($http) {
                this.$http = $http;
                this.httpService = $http;
            }
            MessageService.prototype.getMessages = function () {
                var promise = this.httpService.get('http://jsonplaceholder.typicode.com/posts/').then(function (res) {
                    return res.data;
                });
                return promise;
            };
            MessageService.prototype.postMessage = function (msgData) {
                var promise = this.httpService.post("http://jsonplaceholder.typicode.com/posts/", msgData)
                    .then(function (res) {
                    return res.data;
                });
                return promise;
            };
            MessageService.$inject = ["$http"];
            return MessageService;
        }());
        services.MessageService = MessageService;
        angular
            .module("messageDemo")
            .service("MessageService", MessageService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
