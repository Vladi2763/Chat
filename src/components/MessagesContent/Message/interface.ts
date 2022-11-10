import { Message } from "../../../store/types";

export interface IMessage {
    my: boolean;
    message: Message;
    wasRead: boolean
}