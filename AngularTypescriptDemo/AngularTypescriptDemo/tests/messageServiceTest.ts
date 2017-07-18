describe("MessageService", () => {

    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module("messageDemo"));


    describe("getMessages", () => {
        let msgService: app.services.IMessageService;

        beforeEach(
            angular.mock.inject((
                $http: ng.IHttpService
            ) => {
                msgService = new app.services.MessageService($http);
            })
        );


        //test the result of a returned promise        
        it('should resolve promise with correct messages', inject(function ($rootScope: ng.IRootScopeService) {
            msgService.getMessages()
                .then((result) => {
                    // Assert
                    expect(result.length).toEqual(100);
                });

            $rootScope.$digest();
        }));
                       
    });
});