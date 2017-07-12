module app.directives {

    interface IHtWidgetHeaderScope {
        title: string;
    }

    //Usage:
    //<div page-header-widget title="vm.map.title"></div>
    // Creates:
    // <div ht-widget-header=""
    //      title="Movie"
    //</div>
    class PageHeaderWidget implements ng.IDirective {
        static $inject: Array<string> = [''];
        constructor() { }

        static instance(): ng.IDirective {
            return new PageHeaderWidget();
        }

        scope: IHtWidgetHeaderScope = {
            'title': '@',
        };

        templateUrl: string = 'app/widgets/page-header-widget.html';
        restrict: string = 'EA';
    }

    angular.module('messageDemo').directive('pageHeaderWidget', PageHeaderWidget.instance);
}