module app.controllers {

    class MessageListCtrl implements app.interfaces.IMessageListModel {
        title: string;
        messages: app.domain.IMessage[];

        static $inject = ["MessageService"];

        constructor(msgService: app.services.IMessageService) {
            this.title = "Message List";

            msgService.getMessages().then((result) => {
                this.messages = result;
            })
                .catch((reason: any) => {
                    alert(reason.Message || reason.message);
                });            
        }
    }

    angular.module("messageDemo")
        .controller("MessageListCtrl", MessageListCtrl);

}