module app.services {


    class MessageService implements app.services.IMessageService {
        httpService: ng.IHttpService;

        static $inject = ["$http"];
        constructor(private $http: ng.IHttpService) {
            this.httpService = $http;
        }

        getMessages(): ng.IPromise<app.domain.IMessage[]> {
            var promise = this.httpService.get('http://jsonplaceholder.typicode.com/posts/').then(function (res) {
                return res.data;
            });
            return promise;
        }

        postMessage(msgData: app.domain.IMessage): ng.IPromise<app.domain.IMessage> {
            var promise = this.httpService.post("http://jsonplaceholder.typicode.com/posts/", msgData)
            .then(function (res) {
                return res.data;
            });
            return promise;
        }
    }

    angular
        .module("messageDemo")
        .service("MessageService", MessageService);
}