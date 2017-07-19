describe("MessageService", function () {
    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module("ngMockE2E"));
    beforeEach(angular.mock.module("messageDemo"));
    describe("getMessages", function () {
        var msgService;
        var httpBackend;
        var http;
        //initialize all the dependencies
        beforeEach(angular.mock.inject(function ($http, _$httpBackend_) {
            http = $http;
            msgService = new app.services.MessageService(http);
            httpBackend = _$httpBackend_;
        }));
        // make sure no expectations were missed in your tests.
        afterEach(function () {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });
        it("getMessages should be defined", function () {
            expect(msgService.getMessages).toBeDefined();
        });
        it("should call the get messages URL", inject(function () {
            httpBackend.whenGET("http://jsonplaceholder.typicode.com/posts/").respond({ hello: 'World' });
            httpBackend.expectGET("http://jsonplaceholder.typicode.com/posts/");
            msgService.getMessages();
        }));
        it('should resolve promise with correct no. of messages - Mocked Data', function () {
            var result;
            var returnData = [];
            httpBackend.expectGET("http://jsonplaceholder.typicode.com/posts/").respond(returnData);
            var returnedPromise = msgService.getMessages();
            returnedPromise.then(function (response) {
                result = response.length;
            });
            httpBackend.flush();
            expect(result).toEqual(returnData.length);
        });
    });
});
