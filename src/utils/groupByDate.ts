import { Message } from "../store/types";
import { IEditedMessage } from "./interface";


export function groupByDate(key: string) {
    return function group(array: Array<Message>): Record<string, Array<IEditedMessage>> {
      return array.reduce((acc: Record<string, Array<IEditedMessage>>, obj: any) => {
        const property = obj[key];
        acc[property] = acc[property] || [];
        acc[property].push(obj);
        return acc;
      }, {});
    };
  }