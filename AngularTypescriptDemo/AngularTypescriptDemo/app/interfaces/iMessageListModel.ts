module app.interfaces {

    export interface IMessageListModel {
        title: string;
        messages: app.domain.IMessage[];
    }
}