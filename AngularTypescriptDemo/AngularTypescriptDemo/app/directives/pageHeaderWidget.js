var app;
(function (app) {
    var directives;
    (function (directives) {
        //Usage:
        //<div page-header-widget title="vm.map.title"></div>
        // Creates:
        // <div ht-widget-header=""
        //      title="Movie"
        //</div>
        var PageHeaderWidget = (function () {
            function PageHeaderWidget() {
                this.scope = {
                    'title': '@',
                };
                this.templateUrl = 'app/widgets/page-header-widget.html';
                this.restrict = 'EA';
            }
            PageHeaderWidget.instance = function () {
                return new PageHeaderWidget();
            };
            PageHeaderWidget.$inject = [''];
            return PageHeaderWidget;
        }());
        angular.module('messageDemo').directive('pageHeaderWidget', PageHeaderWidget.instance);
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
