module app.controllers {

    class AccessibilityCtrl implements app.interfaces.IAccessibilityModel {
        pagetitle: string;
        tab: number;

        constructor() {
            this.pagetitle = "Add New Message";
            this.tab = 1;          
        }
        

        SetTab(tabNumber: number): void {
            angular.element("li[role='tab']").attr("aria-selected", "false");
            angular.element("#tab" + tabNumber).attr("aria-selected", "true");

            angular.element("div[role='tabpanel']").attr("aria-hidden", "true");
            angular.element("#panel" + tabNumber).attr("aria-hidden", "false");          
        }

    }

    angular.module("messageDemo")
        .controller("AccessibilityCtrl", AccessibilityCtrl);

}