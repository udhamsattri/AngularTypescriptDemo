module app.controllers {

    class AddMessageCtrl implements app.interfaces.IAddMessageModel {
        pagetitle: string;
        msgService: app.services.IMessageService;
        msgData: app.domain.IMessage;

        static $inject = ["MessageService"];

        constructor(msgService: app.services.IMessageService) {
            this.pagetitle = "Add New Message";
            this.msgService = msgService;
            this.msgData = new app.domain.Message();
            this.msgData.userId = 0;
            this.msgData.id = 0;
            this.msgData.title = "";
            this.msgData.body = "";                  
        }

        PushMessage(): void {

            this.msgService.postMessage(this.msgData).then((result) => {
                alert("Message Added Successfully");
            })
                .catch((reason: any) => {
                    alert("Some error occurred");
                });            
        }

    }

    angular.module("messageDemo")
        .controller("AddMessageCtrl", AddMessageCtrl);

}