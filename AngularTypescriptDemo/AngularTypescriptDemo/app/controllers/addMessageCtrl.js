var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var AddMessageCtrl = (function () {
            function AddMessageCtrl(msgService) {
                this.pagetitle = "Add New Message";
                this.msgService = msgService;
                this.msgData = new app.domain.Message();
                this.msgData.userId = 0;
                this.msgData.id = 0;
                this.msgData.title = "";
                this.msgData.body = "";
            }
            AddMessageCtrl.prototype.PushMessage = function () {
                this.msgService.postMessage(this.msgData).then(function (result) {
                    alert("Message Added Successfuslly");
                })
                    .catch(function (reason) {
                    alert("Some error occurred");
                });
            };
            AddMessageCtrl.$inject = ["MessageService"];
            return AddMessageCtrl;
        }());
        angular.module("messageDemo")
            .controller("AddMessageCtrl", AddMessageCtrl);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
