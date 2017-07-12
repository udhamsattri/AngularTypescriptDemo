module app.services {
    export interface IMessageService {
        getMessages(): ng.IPromise<app.domain.IMessage[]>;

        postMessage(msgData: app.domain.IMessage): ng.IPromise<app.domain.IMessage>;
    }
}