describe("MessageService", function () {
    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module("messageDemo"));
    describe("getMessages", function () {
        var msgService;
        beforeEach(angular.mock.inject(function ($http) {
            msgService = new app.services.MessageService($http);
        }));
        //test the result of a returned promise        
        it('should resolve promise with correct messages', inject(function ($rootScope) {
            msgService.getMessages()
                .then(function (result) {
                // Assert
                expect(result.length).toEqual(100);
            });
            $rootScope.$digest();
        }));
    });
});
