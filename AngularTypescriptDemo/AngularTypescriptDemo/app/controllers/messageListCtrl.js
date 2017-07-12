var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var MessageListCtrl = (function () {
            function MessageListCtrl(msgService) {
                var _this = this;
                this.title = "Message List";
                msgService.getMessages().then(function (result) {
                    _this.messages = result;
                })
                    .catch(function (reason) {
                    alert(reason.Message || reason.message);
                });
            }
            MessageListCtrl.$inject = ["MessageService"];
            return MessageListCtrl;
        }());
        angular.module("messageDemo")
            .controller("MessageListCtrl", MessageListCtrl);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
