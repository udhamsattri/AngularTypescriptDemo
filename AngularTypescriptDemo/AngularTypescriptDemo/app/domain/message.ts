module app.domain {

    export class Message implements app.domain.IMessage {
        id: number;
        userId: number;
        title: string;
        body: string;

        //constructor(
        //    id: number,
        //    userId: number,
        //    title: string,
        //    body: string) { }

    }
}