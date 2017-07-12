var app;
(function (app) {
    var domain;
    (function (domain) {
        var Message = (function () {
            function Message() {
            }
            return Message;
        }());
        domain.Message = Message;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
