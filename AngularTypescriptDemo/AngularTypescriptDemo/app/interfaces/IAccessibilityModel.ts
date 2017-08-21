module app.interfaces {
    export interface IAccessibilityModel {
        pagetitle: string;
        SetTab(tabNumber: number): void;
        //IsSet(tabNumber: number): boolean;
    }
}