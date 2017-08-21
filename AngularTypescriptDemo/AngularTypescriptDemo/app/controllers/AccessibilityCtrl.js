var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var AccessibilityCtrl = (function () {
            function AccessibilityCtrl() {
                this.pagetitle = "Add New Message";
                this.tab = 1;
            }
            AccessibilityCtrl.prototype.SetTab = function (tabNumber) {
                angular.element("li[role='tab']").attr("aria-selected", "false");
                angular.element("#tab" + tabNumber).attr("aria-selected", "true");
                angular.element("div[role='tabpanel']").attr("aria-hidden", "true");
                angular.element("#panel" + tabNumber).attr("aria-hidden", "false");
            };
            return AccessibilityCtrl;
        }());
        angular.module("messageDemo")
            .controller("AccessibilityCtrl", AccessibilityCtrl);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
