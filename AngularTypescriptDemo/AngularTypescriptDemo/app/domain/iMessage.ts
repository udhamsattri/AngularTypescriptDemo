module app.domain {

    export interface IMessage {
        id: number;
        userId: number;
        title: string;
        body: string;        
    }
}